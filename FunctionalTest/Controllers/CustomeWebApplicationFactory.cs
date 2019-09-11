using System;
using Infrastructure.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PhotoAlbum.Web.Api;


namespace FunctionalTest.Controllers
{
    public class CustomWebApplicationFactory<TStartup> : 
        WebApplicationFactory<Startup>
    {
        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureServices(services =>
            {
                services.AddEntityFrameworkInMemoryDatabase();
                var provider = services.AddEntityFrameworkInMemoryDatabase()
                    .BuildServiceProvider();
                services.AddDbContext<AlbumDbContext>(options =>
                    {
                        options.UseInMemoryDatabase("InMemoryDbForTesting");
                        options.UseInternalServiceProvider(provider);
                    });
                var sp = services.BuildServiceProvider();
                using (var scope = sp.CreateScope())
                {
                    var scopedServices = scope.ServiceProvider;
                    var db = scopedServices.GetRequiredService<AlbumDbContext>();
                    db.Database.EnsureCreated();
                    try
                    {
                        AlbumDbContextSeed.SeedAsync(db).Wait();
                    }
                    catch (Exception ex)
                    {
                        //Log Exception
                    }
                }
            });
            
        }
    }
}
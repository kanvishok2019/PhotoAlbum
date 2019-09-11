using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using ApplicationCore.Interfaces;
using ApplicationCore.Services;
using Infrastructure.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace PhotoAlbum.Web.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        private void ConfigureInMemoryDatabases(IServiceCollection service)
        {
            service.AddDbContext<AlbumDbContext>(options =>
                options.UseInMemoryDatabase("AlbumDb"));
            ConfigureServices(service);
        }

        private void ConfigurePhysicalDatabase(IServiceCollection service)
        {
            service.AddDbContext<AlbumDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("AlbumConnection")));
            ConfigureServices(service);
        }

        public void ConfigureDevelopmentServices(IServiceCollection services)
        {
            ConfigureInMemoryDatabases(services);

            //ConfigurePhysicalDatabase(services);
        }



        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped(typeof(IAsyncRepository<>),typeof(AsyncRepository<>));
            services.AddScoped<IAlbumService, AlbumService>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseCors(cfg =>
            {
                cfg.AllowAnyHeader()
                    .WithExposedHeaders(Configuration.GetValue<string>("PaginationHeaderName"))
                    .AllowAnyMethod()
                    .AllowAnyOrigin()
                    .AllowCredentials();
            });
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}

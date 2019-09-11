using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using Microsoft.EntityFrameworkCore.Internal;

namespace Infrastructure.Data
{
    public class AlbumDbContextSeed
    {
        public static async Task SeedAsync(AlbumDbContext albumDbContext)
        {
            if (!albumDbContext.Albums.Any())
            {
                await albumDbContext.Albums.AddRangeAsync(await GetAlbums());
            }
            if (!albumDbContext.Photos.Any())
            {
                await albumDbContext.Photos.AddRangeAsync(await GetPhotos());
            }
            await albumDbContext.SaveChangesAsync();
        }

        private static async Task<IEnumerable<Album>> GetAlbums()
        {
            var client = new HttpClient();
            var response = await client.GetAsync("http://jsonplaceholder.typicode.com/albums");
            if (response.IsSuccessStatusCode)
            {
                 return await response.Content.ReadAsAsync<IEnumerable<Album>>();
            }
            return new List<Album>();
        }
        private static async Task<IEnumerable<Photo>> GetPhotos()
        {
            var client = new HttpClient();
            var response = await client.GetAsync("http://jsonplaceholder.typicode.com/photos");
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<IEnumerable<Photo>>();
            }
            return new List<Photo>();
        }
    }
}

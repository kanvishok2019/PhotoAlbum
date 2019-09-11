using PhotoAlbum.Web.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using Microsoft.AspNetCore.Mvc.Testing;
using PhotoAlbum.Web.Api.ViewModel;
using Xunit;

namespace FunctionalTest.Controllers
{
    public class AlbumControllerTests : IClassFixture<CustomWebApplicationFactory<Startup>>
    {
        public HttpClient Client { get; }

        public AlbumControllerTests(CustomWebApplicationFactory<Startup> factory)
        {
            Client = factory.CreateClient(new WebApplicationFactoryClientOptions
            { AllowAutoRedirect = false });
        }

        [Fact]
        public async Task GetAll_Album_Should_Return_Albums()
        {
            var response = await Client.GetAsync("/api/album?userId=1&pageNumber=0");
            response.EnsureSuccessStatusCode();
            var albumViewModel = await response.Content.ReadAsAsync<PaginatedAlbumViewModel>();
            Assert.True(albumViewModel.Albums.Any());

            //Assuming the test data is consistent
            Assert.False(albumViewModel.Next);
            Assert.False(albumViewModel.Previous);
            Assert.Equal(10, albumViewModel.ItemsPerPage);
            Assert.Equal(10, albumViewModel.TotalItems);
            Assert.Equal(0, albumViewModel.ActualPage);
        }
        [Fact]
        public async Task Next_PageShould_Be_Enabled_When_Total_Items_More_Than_Page_Size()
        {
            var response = await Client.GetAsync("/api/album?userId=1&pageNumber=0&itemsPerPage=5");
            response.EnsureSuccessStatusCode();
            var albumViewModel = await response.Content.ReadAsAsync<PaginatedAlbumViewModel>();
            Assert.True(albumViewModel.Albums.Any());

            //Assuming the test data is consistent
            Assert.True(albumViewModel.Next);
            Assert.False(albumViewModel.Previous);
            Assert.Equal(5, albumViewModel.ItemsPerPage);
            Assert.Equal(10, albumViewModel.TotalItems);
            Assert.Equal(0, albumViewModel.ActualPage);
        }

        [Fact]
        public async Task Previous_PageShould_Be_Enabled_When_Current_Page_Is_Greater_Than_Zero()
        {
            var response = await Client.GetAsync("/api/album?userId=1&pageNumber=1&itemsPerPage=5");
            response.EnsureSuccessStatusCode();
            var albumViewModel = await response.Content.ReadAsAsync<PaginatedAlbumViewModel>();
            Assert.True(albumViewModel.Albums.Any());

            //Assuming the test data is consistent
            Assert.False(albumViewModel.Next);
            Assert.True(albumViewModel.Previous);
            Assert.Equal(5, albumViewModel.ItemsPerPage);
            Assert.Equal(10, albumViewModel.TotalItems);
            Assert.Equal(1, albumViewModel.ActualPage);
        }
    }
}

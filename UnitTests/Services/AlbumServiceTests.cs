using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using ApplicationCore.Services;
using ApplicationCore.Specifications;
using Moq;
using Xunit;

namespace UnitTests.Services
{
    public class AlbumServiceTests
    {
        private Mock<IAsyncRepository<Album>> _mockAlbumRepository;

        public AlbumServiceTests()
        {
            _mockAlbumRepository = new Mock<IAsyncRepository<Album>>();
        }

        [Fact]
        public async Task GetAlbumByUserId_Should_Return_Albums()
        {
            var albums = new List<Album>
                {new Album {Id = 1, UserId = 1, Title = "Album1"},
                new Album {Id = 2, UserId = 1, Title = "Album2"},
                new Album {Id = 3, UserId = 1, Title = "Album3"}
                };
            var albumFilterSpecification = new AlbumFilterSpecificationWithPagination(0,3,1);
            _mockAlbumRepository.Setup(x => x.ListAsync(albumFilterSpecification)).ReturnsAsync(albums);
            var albumService = new AlbumService(_mockAlbumRepository.Object);
            Assert.NotEmpty(await albumService.GetAlbumsByUserId(0,3,1));
        }

        [Fact]
        public async Task GetAlbumCountAsyncByUserId_Should_Return_Number_Of_Albums()
        {
            var albums = new List<Album>
            {new Album {Id = 1, UserId = 1, Title = "Album1"},
                new Album {Id = 2, UserId = 1, Title = "Album2"},
                new Album {Id = 3, UserId = 1, Title = "Album3"}
            };
             _mockAlbumRepository.Setup(x => x.CountAsync(It.IsAny<AlbumFilterSpecification>() )).ReturnsAsync(3);
            var albumService = new AlbumService(_mockAlbumRepository.Object);
            var albumCount = await albumService.GetAlbumCountAsyncByUserId(1);
            Assert.Equal(3, albumCount);
        }


    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using ApplicationCore.Specifications;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Xunit;
using Xunit.Abstractions;

namespace IntegrationTests.Repositories
{
    public class AlbumRepositoryTest
    {
        private readonly ITestOutputHelper _output;
        private readonly AlbumDbContext _albumDbContext;
        private readonly IAsyncRepository<Album> _albumRepository;

        public AlbumRepositoryTest(ITestOutputHelper output)
        {
            _output = output;
            var dbOptions = new DbContextOptionsBuilder<AlbumDbContext>()
                .UseInMemoryDatabase("AlbumDb").Options;
            _albumDbContext = new AlbumDbContext(dbOptions);
            _albumRepository = new AsyncRepository<Album>(_albumDbContext);
            AlbumDbContextSeed.SeedAsync(_albumDbContext).Wait();

        }
        [Fact]
        public async Task Get_Album_Should_Return_Album()
        {
            var album = await _albumRepository.GetByIdAsync(1);
            Assert.Equal(1,album.Id);
        }
        [Fact]
        public async Task Get_Album_Of_Specific_User_Should_Return_Correct_Album()
        {
            var albumFilterSpecification = new AlbumFilterSpecificationWithPagination(0, 5, 1);
            var albums = await _albumRepository.ListAsync(albumFilterSpecification);
            Assert.NotEmpty(albums);
            Assert.Equal(5,albums.Count);
            var singleAlbum = albums.First();
            Assert.Equal(1, singleAlbum.UserId);
        }

        [Fact]
        public async Task Get_Album_Of_Specific_User_Should_Return_Photos()
        {
            var albumFilterSpecification = new AlbumFilterSpecificationWithPagination(0,10,1);
            var albums = await _albumRepository.ListAsync(albumFilterSpecification);
            var singleAlbum = albums.First();
            Assert.NotEmpty(singleAlbum.Photos);
        }
        [Fact]
        public async Task Get_Album_Of_Specific_User_Should_Match_Album_Count()
        {
            var albumFilterSpecification = new AlbumFilterSpecification(1);
            var numberOfAlbums = await _albumRepository.CountAsync(albumFilterSpecification);
            
            Assert.Equal(10,numberOfAlbums);
        }
    }
}

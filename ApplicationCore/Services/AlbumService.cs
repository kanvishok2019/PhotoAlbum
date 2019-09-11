using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using ApplicationCore.Specifications;

namespace ApplicationCore.Services
{
    public class AlbumService:IAlbumService
    {
        private readonly IAsyncRepository<Album> _albumAsyncRepository;

        public AlbumService(IAsyncRepository<Album> albumAsyncRepository)
        {
            _albumAsyncRepository = albumAsyncRepository;
        }

        public async Task<IReadOnlyList<Album>> GetAlbumsByUserId(int pageIndex, int itemsPage,int? userId)
        {
            var albumFilterSpecification = new AlbumFilterSpecificationWithPagination(pageIndex * itemsPage, itemsPage, userId);
            return await _albumAsyncRepository.ListAsync(albumFilterSpecification);
        }

        public async Task<int> GetAlbumCountAsyncByUserId(int userId)
        {
            var albumFilterSpecification = new AlbumFilterSpecification(userId);
            return await _albumAsyncRepository.CountAsync(albumFilterSpecification);
        }
    }
}

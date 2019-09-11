using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ApplicationCore.Entities;

namespace ApplicationCore.Interfaces
{
    public interface IAlbumService
    {
        Task<IReadOnlyList<Album>> GetAlbumsByUserId(int pageIndex, int itemsPage, int? userId);
        Task<int> GetAlbumCountAsyncByUserId(int userId);
    }
}

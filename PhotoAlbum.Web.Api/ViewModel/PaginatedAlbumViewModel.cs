using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Entities;

namespace PhotoAlbum.Web.Api.ViewModel
{
    public class PaginatedAlbumViewModel
    {
        public IEnumerable<Album> Albums { get; set; }
        public int TotalItems { get; set; }
        public int ItemsPerPage { get; set; }
        public int ActualPage { get; set; }
        public int TotalPages { get; set; }
        public bool Previous { get; set; }
        public bool Next { get; set; }
    }
}

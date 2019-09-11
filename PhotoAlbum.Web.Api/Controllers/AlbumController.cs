using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationCore.Entities;
using ApplicationCore.Interfaces;
using Microsoft.AspNetCore.Mvc;
using PhotoAlbum.Web.Api.ViewModel;

namespace PhotoAlbum.Web.Api.Controllers
{
    [Route("api/album")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        private readonly IAlbumService _albumService;
        public AlbumController(IAlbumService albumService)
        {
            _albumService = albumService;
        }
        
        [HttpGet]
        public async Task<ActionResult<PaginatedAlbumViewModel>> Get(int userId, int? pageNumber, int itemsPerPage = 10)
        {
            if (itemsPerPage > 10)
                itemsPerPage = 10;
            var pageIndex = pageNumber ?? 0;
            var albums = await _albumService.GetAlbumsByUserId(pageIndex, itemsPerPage, userId);
            var totalAlbums = await _albumService.GetAlbumCountAsyncByUserId(userId);
            var viewModel = new PaginatedAlbumViewModel
            {
                Albums = albums,
                ActualPage = pageIndex,
                ItemsPerPage = itemsPerPage,
                TotalItems = totalAlbums,
                TotalPages = int.Parse(Math.Ceiling(((decimal)totalAlbums / itemsPerPage)).ToString())
            };
            viewModel.Next = viewModel.ActualPage != viewModel.TotalPages - 1;
            viewModel.Previous = (viewModel.ActualPage != 0);

            return Ok(viewModel);
        }

    }
}

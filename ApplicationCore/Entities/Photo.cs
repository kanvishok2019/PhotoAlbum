using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Entities
{
    public class Photo : BaseEntity
    {
        public string Title { get; set; }
        public string Url { get; set; }
        public string ThumbnailUrl { get; set; }
        public int AlbumId { get; set; }
    }
}

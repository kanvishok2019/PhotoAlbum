using System;
using System.Collections.Generic;
using System.Reflection.Metadata;
using System.Text;

namespace ApplicationCore.Entities
{
    public class Album : BaseEntity
    {
        public string Title { get; set; }
        public int UserId { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}

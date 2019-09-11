using System;
using System.Collections.Generic;
using System.Text;
using ApplicationCore.Entities;

namespace ApplicationCore.Specifications
{
    public class AlbumFilterSpecification : BaseSpecification<Album>
    {
        public AlbumFilterSpecification(int userId) : base(a =>a.UserId == userId)
        {

        }

    }
}

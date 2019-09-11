using System.Text;
using ApplicationCore.Entities;

namespace ApplicationCore.Specifications
{
    public sealed class AlbumFilterSpecificationWithPagination : BaseSpecification<Album>
    {
        public AlbumFilterSpecificationWithPagination(int skip, int take, int? userId)
            : base(i => (!userId.HasValue || i.UserId == userId.Value))
        {
            AddInclude(a=>a.Photos);
            ApplyPaging(skip, take);
        }
    }
}


using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specification
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>

    {
        public ProductsWithTypesAndBrandsSpecification(SpecificationParams reqParams)
            : base(x =>
                    (string.IsNullOrEmpty(reqParams.Search) || x.Name.ToLower().Contains(reqParams.Search)) &&
                    (!reqParams.BrandId.HasValue || x.ProductBrandId == reqParams.BrandId) &&
                    (!reqParams.TypeId.HasValue || x.ProductTypeId == reqParams.TypeId)
                )
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
            AddOrderBy(x => x.Name);
            ApplyPagination((reqParams.PageSize * (reqParams.PageIndex - 1)), reqParams.PageSize);
            switch (reqParams.Sort)
            {
                case "priceAsc":
                    AddOrderBy(x => x.Price);
                    break;
                case "priceDesc":
                    AddOrderByDescending(x => x.Price);
                    break;
                default:
                    break;
            }
        }

        public ProductsWithTypesAndBrandsSpecification(int id)
        : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}
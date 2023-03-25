using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specification
{
    public class ProductsCountAfterApplyFilterSpecification : BaseSpecification<Product>
    {
        public ProductsCountAfterApplyFilterSpecification(SpecificationParams reqParams) :
        base(x =>
                (string.IsNullOrEmpty(reqParams.Search) || x.Name.ToLower().Contains(reqParams.Search)) &&
                (!reqParams.BrandId.HasValue || x.ProductBrandId == reqParams.BrandId) &&
                (!reqParams.TypeId.HasValue || x.ProductTypeId == reqParams.TypeId)
                )
        {
        }
    }
}
using API.DTOs;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.ProductType, o => o.MapFrom(t => t.ProductType.Name))
                .ForMember(d => d.ProductBrand, o => o.MapFrom(b => b.ProductBrand.Name))
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ProductUrlResolver>())
                ;
        }
    }
}
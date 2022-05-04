using Business.Abstract;
using Business.Concrete;
using Core.Utilities.Results;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        IProductService productService;
        public ProductsController(IProductService productService)
        {
            this.productService = productService;
        }

        [HttpGet]
        public IDataResult<List<Product>> Get()
        {
            IProductService productService = new ProductManager(new EfProductDal());

            return productService.GetAll();
        }
    }
}

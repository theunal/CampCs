using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Business.Const;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Caching;
using Core.Aspects.Autofac.Validation;
using Core.Utilities.Business;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Business.Concrete
{
    public class ProductManager : IProductService
    {

        IProductDal productDal;
        ICategoryService categoryService; // dalı değil sadece service i inject edebilirsin

        public ProductManager(IProductDal productDal, ICategoryService categoryService)
        {
            this.productDal = productDal;
            this.categoryService = categoryService;
        }



        [SecuredOperation("product.add,admin")]
        [ValidationAspect(typeof(ProductValidator))]
        [CacheRemoveAspect("IProductService.Get")]
        public IResult Add(Product product)
        {
            // private business kurallarını business rules.run a gönderiyoruz
            var result = BusinessRules.Run(
                CheckIfProductCountOfCategory(product.CategoryId),
                CheckIfProductNameExists(product.ProductName),
                CheckIfCategoryLimitExceeded());

            if (result == null)
            {
                productDal.Add(product);
                return new SuccessResult(Messages.ProductAdded);
            }


            return result;


        }

        [CacheAspect]
        public IDataResult<List<Product>> GetAll()
        {
            if (DateTime.Now.Hour == 18)
            {
                return new ErrorDataResult<List<Product>>(Messages.MaintenanceTime);
            }
            return new SuccessDataResult<List<Product>>(productDal.GetAll(), Messages.ProductsListed);
        }

        public IDataResult<List<Product>> GetAllByCategoryId(int id)
        {
            return new SuccessDataResult<List<Product>>
                (productDal.GetAll(p => p.CategoryId == id), Messages.ProductsListedByCategoryId);
        }


        [CacheAspect]
        public IDataResult<Product> GetById(int id)
        {
            return new SuccessDataResult<Product>
                (productDal.Get(p => p.ProductId == id), Messages.ProductListed);
        }

        public IDataResult<List<Product>> GetByUnitPrice(int min, int max)
        {
            return new SuccessDataResult<List<Product>>
                (productDal.GetAll(p => p.UnitPrice >= min && p.UnitPrice <= max), Messages.ProductsListed);
        }

        public IDataResult<List<ProductDetailDto>> GetProductDetails()
        {
            return new SuccessDataResult<List<ProductDetailDto>>
                (productDal.GetProductDetails());
        }

        [CacheRemoveAspect("IProductService.Get")]
        public IResult Update(Product product)
        {
            throw new NotImplementedException();
        }

        private IResult CheckIfProductCountOfCategory(int categoryId)
        {
            var result = productDal.GetAll(p => p.CategoryId == categoryId);

            if (result.Count > 10)
            {
                return new ErrorResult(Messages.CheckProductCountOfCategoryError);
            }
            return new SuccessResult();
        }

        private IResult CheckIfProductNameExists(string productName)
        {
            var result = productDal.GetAll(p => p.ProductName == productName).Any();

            if (result)
            {
                return new ErrorResult(Messages.ProductNameAlreadyExists);
            }
            return new SuccessResult();
        }

        private IResult CheckIfCategoryLimitExceeded()
        {
            var result = categoryService.GetAll();

            if (result.Data.Count > 15)
            {
                return new ErrorResult(Messages.CategoryLimitExceeded);
            }
            return new SuccessResult();
        }





    }
}

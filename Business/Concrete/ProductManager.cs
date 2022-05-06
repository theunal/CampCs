using Business.Abstract;
using Business.Const;
using Business.ValidationRules.FluentValidation;
using Core.Aspects.Autofac.Validation;
using Core.CrossCuttingConcerns.Validation;
using Core.Utilities.Business;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Business.Concrete
{
    public class ProductManager : IProductService
    {

        IProductDal productDal;

        public ProductManager(IProductDal productDal)
        {
            this.productDal = productDal;
        }




        [ValidationAspect(typeof(ProductValidator))]
        public IResult Add(Product product)
        {
            // private business kurallarını business rules.run a gönderiyoruz
            var result = BusinessRules.Run(
                CheckIfProductCountOfCategory(product.CategoryId),
                CheckIfProductNameExists(product.ProductName));

            if (result == null)
            {
                productDal.Add(product);
                return new SuccessResult(Messages.ProductAdded);
            }


            return result;


        }

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

       



    }
}

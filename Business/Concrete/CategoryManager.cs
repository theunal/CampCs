using Business.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class CategoryManager : ICategoryService
    {
        ICategoryDal categoryDal;
        public CategoryManager(ICategoryDal categoryDal)
        {
            this.categoryDal = categoryDal;
        }



        public List<Category> GetAll()
        {
            return categoryDal.GetAll();
        }

        public Category GetById(int id)
        {
            return categoryDal.Get(p => p.CategoryId == id);
        }
    }
}

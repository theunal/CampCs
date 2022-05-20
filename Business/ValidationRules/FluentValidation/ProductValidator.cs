using Entities.Concrete;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.ValidationRules.FluentValidation
{
    public class ProductValidator : AbstractValidator<Product>
    {
        public ProductValidator()
        {
            // product kuralları
            RuleFor(p => p.ProductName).NotEmpty().WithMessage("Ürün ismi boş geçilemez.");
            RuleFor(p => p.ProductName).MinimumLength(2).WithMessage("Ürün ismi en az 2 karakter olmalıdır.");
            RuleFor(p => p.UnitPrice).NotEmpty().WithMessage("Ürün fiyatı boş geçilemez.");
            RuleFor(p => p.UnitPrice).GreaterThanOrEqualTo(10).WithMessage("Ürün fiyatı 10 değerine eşit veya daha büyük olmalıdır.");
         
  
        
        }

    }
}

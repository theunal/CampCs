using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using System;

namespace ConsoleUI
{
    public class Program
    {
        static void Main(string[] args)
        {
            ProductManager productManager = new ProductManager(new EfProductDal());

            var result = productManager.GetAll();
            
            if (result.Success == true)
            {
                foreach (var product in result.Data)
                {
                    Console.WriteLine(product.ProductId + ", " + product.ProductName + ", " + product.UnitPrice);
                }
            }else
            {
                Console.WriteLine(result.Message);
            }
           


        }
    }
}
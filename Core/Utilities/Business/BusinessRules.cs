using Core.Utilities.Results;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Business
{
    public class BusinessRules
    {
        // manager daki private business kural methodları IResult döndürdüğü için 
        //IResult döndüren Run fonksiyonu olusturduk ve array olarak gelen tüm
        // kuralları dönüp success değilse kendisini return ediyor
        public static IResult Run(params IResult[] logics)
        {
            foreach (var logic in logics)
            {
                if (!logic.Success)
                {
                    return logic;
                }
            }

            return null;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Results
{
    public interface IResult // ana result 
    {
       public bool Success { get; }
       public string Message { get; }
    }
}
 
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Security.JWT
{
    // doğrulama yaparken gönderilecek olan token
    public class AccessToken
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
        
    }
}

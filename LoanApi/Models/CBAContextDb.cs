using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace LoanApi.Models
{
    public class CBAContextDb : DbContext
    {
        public CBAContextDb(): base("name=DefaultConnection") {}

    }
}
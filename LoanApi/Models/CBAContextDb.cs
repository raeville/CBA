using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace LoanApi.Models
{
    public class CBAContextDb : DbContext, IContextDb
    {
        public CBAContextDb(): base("name=DefaultConnection") {}

        public DbSet<CustomerModel> Customers { get; set; }

        IQueryable<T> IContextDb.Query<T>()
        {
            return Set<T>();
        }

        void IDisposable.Dispose()
        {
            base.Dispose();
        }
    }
}
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
        public DbSet<LoanTypeModel> LoanTypes { get; set; }

        IQueryable<T> IContextDb.Query<T>()
        {
            return Set<T>();
        }

        void IContextDb.Add<T>(T t)
        {
            try
            {
                if (t is CustomerModel)
                {
                    Customers.Add(t as CustomerModel);
                  }
                else if (t is LoanTypeModel)
                {
                    LoanTypes.Add(t as LoanTypeModel);
                    
                }
                this.SaveChanges();
            }
            catch (Exception)
            {
                           
            }
           
       }

        void IContextDb.SaveChanges<T>(T t)
        {
            try
            {
                if (t is CustomerModel)
                {
                    this.SaveChanges();
                }
                else if (t is LoanTypeModel)
                {
                    this.SaveChanges();
                }
            }
            catch (Exception)
            {

            }
           
        }

        void IDisposable.Dispose()
        {
            base.Dispose();
        }
    }
}
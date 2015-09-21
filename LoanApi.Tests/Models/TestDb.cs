using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LoanApi.Models;

namespace LoanApi.Tests.Models
{
    public class TestDb : IContextDb
    {
        Dictionary<Type, object> set = new Dictionary<Type, object>();

        public void AddSet<T> (IQueryable<T> objects)
        {
            set.Add(typeof(T), objects);
        }

        IQueryable<T> IContextDb.Query<T>()
        {
            return set[typeof(T)] as IQueryable<T>;
        }

        void IContextDb.Add<T>(T objects)
        {
            set.Add(typeof(T), objects as IQueryable<T>);
        }

        void IContextDb.SaveChanges<T>(T objects)
        {
            set.Add(typeof(T), objects as IQueryable<T>);            
        }
      

        void IDisposable.Dispose()
        {
            
        }

    }
}

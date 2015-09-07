using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoanApi.Models
{
    interface IContextDb : IDisposable
    {
        IQueryable<T> Query<T>() where T : class;
    }
}

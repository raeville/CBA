using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace LoanApi.Controllers
{
    public class CustomerController : ApiController
    {
        // GET api/customer
        [Authorize]
        public object Get()
        {
            return new { Name = "Name" };
        }

        [Authorize]
        // GET api/customer/5
        public object Get(int id)
        {
            return new { Name = "Name" };
        }

        [Authorize]
        // POST api/customer
        public void Post([FromBody]string value)
        {
        }

        [Authorize]
        // PUT api/customer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        [Authorize]
        // DELETE api/customer/5
        public void Delete(int id)
        {
        }
    }
}
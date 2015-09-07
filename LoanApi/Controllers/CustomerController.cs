using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LoanApi.Models;

namespace LoanApi.Controllers
{
    public class CustomerController : ApiController
    {

        private static readonly ICustomerRepository _customers = new CustomerRepository();
        // GET api/<controller>
        public IEnumerable<CustomerModel> Get()
        {
            return _customers.GetAll();
        }
        // GET api/<controller>/5
        public CustomerModel Get(int id)
        {
            CustomerModel c = _customers.Get(id);
            if (c == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
 
            return c;
        }
        // POST api/<controller>
        public CustomerModel Post(CustomerModel customer)
        {
            return _customers.Add(customer);
        }
        // PUT api/<controller>/5
        public CustomerModel Put(CustomerModel customer)
        {
            if (!_customers.Update(customer))
                throw new HttpResponseException(HttpStatusCode.NotFound);
            return customer;
        }
        // DELETE api/<controller>/5
        public CustomerModel Delete(int id)
        {
            CustomerModel c = _customers.Get(id);
            _customers.Remove(id);
            return c;
        }
    
    }
}
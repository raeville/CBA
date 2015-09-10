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

        //public ICustomerRepository _customers;

        //public CustomerController(ICustomerRepository customers)
        //{
        //    _customers = customers;
        //}

        private static readonly ICustomerRepository _customers = new CustomerRepository();
        // GET api/<controller>
        public IEnumerable<CustomerModel> Get()
        {
            return _customers.GetAll();
        }
        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            CustomerModel c = _customers.Get(id);
            if (c == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            return Ok(c);
        }
        // POST api/<controller>
        public IHttpActionResult Post(CustomerModel customer)
        {
            CustomerModel c = _customers.Add(customer);

            return Ok(c);
        }
        // PUT api/<controller>/5
        public IHttpActionResult Put(CustomerModel customer)
        {
            if (!_customers.Update(customer))
                throw new HttpResponseException(HttpStatusCode.NotFound);
            return Ok(customer);
        }
        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id)
        {
            CustomerModel c = _customers.Get(id);
            _customers.Remove(id);
            return Ok(c);
        }
    
    }
}
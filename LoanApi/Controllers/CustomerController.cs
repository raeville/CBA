using System;
using System.Collections.Generic;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LoanApi.Models;

namespace LoanApi.Controllers
{
    public class CustomerController : ApiController
    {

        private IContextDb db;

        public CustomerController(){

            db = new CBAContextDb();
        }


        public CustomerController(IContextDb _db)
        {

            db = _db;
        }

        // GET api/<controller>
        public IEnumerable<CustomerModel> Get()
        {
            return db.Query<CustomerModel>().ToList();
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {

            try {

                CustomerModel customer = db.Query<CustomerModel>().Where(x=>x.Id == id).FirstOrDefault();

                return Ok(customer);

            }
            catch (HttpResponseException e)
            {

                return NotFound();
            }            
        }
               
    
    }
}
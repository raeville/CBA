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
using System.Data.Entity;

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

        // POST api/<controller>
        public IHttpActionResult Post(CustomerModel customer)
        {

            try
            {
                
                 CustomerModel newCustomer = new CustomerModel();
                 newCustomer.Id = customer.Id;
                 newCustomer.Email = customer.Email;
                 newCustomer.FirstName = customer.FirstName;
                 newCustomer.LastName = customer.LastName;
                 newCustomer.MiddleName = customer.MiddleName;
                 newCustomer.Gender = customer.Gender;
                 newCustomer.Address = customer.Address;
                 newCustomer.BirthDate = customer.BirthDate.Date;
                 newCustomer.MaritalStatus = customer.MaritalStatus;
                 newCustomer.SourceOfIncome = customer.SourceOfIncome;
                 newCustomer.IsDeleted = customer.IsDeleted;
                 newCustomer.CreateDate = customer.CreateDate;
                 newCustomer.UpdateDate = customer.UpdateDate;                                            

                db.Add(newCustomer);                                
                return Ok();

            }
            catch (HttpResponseException e)
            {

                return NotFound();
            }   
        }

        //// PUT api/<controller>/5
        //public IHttpActionResult Put(CustomerModel customer)
        //{
        //    try
        //    {
        //        CustomerModel c = db.Query<CustomerModel>().Where(x => x.Id == customer.Id).FirstOrDefault();

        //        if (c == null)
        //        {
        //            return NotFound();

        //        }
        //        else
        //        {

        //            c.Id = customer.Id;
        //            c.Email = customer.Email;
        //            c.FirstName = customer.FirstName;
        //            c.LastName = customer.LastName;
        //            c.MiddleName = customer.MiddleName;
        //            c.Gender = customer.Gender;
        //            c.Address = customer.Address;
        //            c.BirthDate = customer.BirthDate.Date;
        //            c.MaritalStatus = customer.MaritalStatus;
        //            c.SourceOfIncome = customer.SourceOfIncome;
        //            c.IsDeleted = customer.IsDeleted;
        //            c.CreateDate = customer.CreateDate;
        //            c.UpdateDate = customer.UpdateDate;

        //            return Ok();
        //        }
        //    }
        //    catch (HttpResponseException e)
        //    {

        //        return NotFound();
        //    }
        //}
               
    
    }
}
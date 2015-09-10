using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Threading.Tasks;
using System.Web.Http.Results;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using LoanApi;
using LoanApi.Models;
using LoanApi.Tests.Models;
using LoanApi.Controllers;


namespace LoanApi.Tests.Controllers
{
     

     public class TestData{
          
         public static IQueryable<CustomerModel> Customers {
             get { 
                
                var customers = new List<CustomerModel> 
            { 
                new CustomerModel { 
                    Id = 1, Email = "User@cba.com", 
                    FirstName = "User First Name", 
                    MiddleName = "User Middle Name", 
                    LastName = "User Last Name",            
                    Gender = "M", 
                    Address = "The World", 
                    BirthDate = DateTime.UtcNow.Date, 
                    MaritalStatus = "M", 
                    SourceOfIncome = "Employed",
                    IsDeleted = false, 
                    CreateDate = DateTime.UtcNow.Date, 
                    UpdateDate = DateTime.UtcNow.Date                
                }, 
                new CustomerModel { 
                    Id = 2, Email = "User@cba.com", 
                    FirstName = "User First Name", 
                    MiddleName = "User Middle Name", 
                    LastName = "User Last Name",            
                    Gender = "M", 
                    Address = "The World", 
                    BirthDate = DateTime.UtcNow.Date, 
                    MaritalStatus = "M", 
                    SourceOfIncome = "Employed",
                    IsDeleted = false, 
                    CreateDate = DateTime.UtcNow.Date, 
                    UpdateDate = DateTime.UtcNow.Date                
                },                 
            }; 
                
                 return customers.AsQueryable();
             }
         }
        
     
     }

    [TestClass]
    public class CustomerControllerTests
    {

       
        [TestMethod]
        public void CustomerRetrieveAll()
        {
            var db = new TestDb();
            db.AddSet(TestData.Customers);

            // Arrange
            CustomerController controller = new CustomerController(db);

            // Act
            IEnumerable<CustomerModel> result = controller.Get();

            // Assert
            Assert.IsNotNull(result);           
        }

        [TestMethod]
        public void CustomerRetrieveById()
        {
            var db = new TestDb();
            db.AddSet(TestData.Customers);

            // Arrange
            CustomerController controller = new CustomerController(db);

            // Act
            var result = controller.Get(1);

            // Assert
            Assert.IsNotNull(result);
        }

        //[TestMethod]
        //public void CustomerCreate()
        //{
        //    var db = new TestDb();
        //    db.AddSet(TestData.Customers);
            
        //    // Arrange
        //    CustomerController controller = new CustomerController(db);                   

        //    CustomerModel testCustomer = new CustomerModel();
        //    testCustomer.Id = 8;
        //    testCustomer.Email = "User@cba.com";
        //    testCustomer.FirstName = "User First Name";
        //    testCustomer.MiddleName = "User Middle Name";
        //    testCustomer.LastName = "User Last Name";            
        //    testCustomer.Gender = "M";
        //    testCustomer.Address = "The World";
        //    testCustomer.BirthDate = DateTime.UtcNow.Date;
        //    testCustomer.MaritalStatus = "M";
        //    testCustomer.SourceOfIncome = "Employed";
        //    testCustomer.IsDeleted = false;
        //    testCustomer.CreateDate = DateTime.UtcNow.Date;
        //    testCustomer.UpdateDate = DateTime.UtcNow.Date;

        //    // Act
        //    var result = controller.Post(testCustomer);

        //    // Assert
        //    Assert.IsNotNull(result);
        //}
      
    }
}

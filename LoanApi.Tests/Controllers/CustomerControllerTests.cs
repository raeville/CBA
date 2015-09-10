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
                var customers = new List<CustomerModel>();
                 for(int i = 0; i < 10 ; i++){
                     var customer = new List<CustomerModel>() { 
                      new CustomerModel { Id = 1 }                 
                     };                 
                 }
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
      
    }
}

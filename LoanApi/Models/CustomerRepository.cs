using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace LoanApi.Models
{
    public interface ICustomerRepository
    {
        IEnumerable<CustomerModel> GetAll();
        CustomerModel Get(int id);
        CustomerModel Add(CustomerModel item);
        void Remove(int id);
        bool Update(CustomerModel item);
    }

    public class CustomerRepository : ICustomerRepository
    {
        private readonly CBAContextDb _db;
        public CustomerRepository()
        {
            _db = new CBAContextDb();
        }
        public IEnumerable<CustomerModel> GetAll()
        {
            return _db.Customers;
        }
        public CustomerModel Get(int id)
        {
            return _db.Customers.Find(id);
        }
        public CustomerModel Add(CustomerModel customer)
        {
            _db.Customers.Add(customer);
            _db.SaveChanges();
            return customer;
        }
        public void Remove(int id)
        {
            CustomerModel customer = _db.Customers.Find(id);
            _db.Customers.Remove(customer);
            _db.SaveChanges();
        }
        public bool Update(CustomerModel item)
        {
            CustomerModel newCustomer = _db.Customers.Find(item.Id);
            if (newCustomer == null)
                return false;
            newCustomer.Email = item.Email;
            newCustomer.FirstName = item.FirstName;
            newCustomer.LastName = item.LastName;
            newCustomer.MiddleName = item.MiddleName;
            newCustomer.Gender = item.Gender;
            newCustomer.Address = item.Address;
            newCustomer.BirthDate = item.BirthDate;
            newCustomer.MaritalStatus = item.MaritalStatus;
            newCustomer.SourceOfIncome = item.SourceOfIncome;
            newCustomer.IsDeleted = item.IsDeleted;
            newCustomer.CreateDate = item.CreateDate;
            newCustomer.UpdateDate = item.UpdateDate;            
            _db.SaveChanges();
            return true;
        }
    }


}
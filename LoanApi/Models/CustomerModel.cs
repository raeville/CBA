using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoanApi.Models
{
    [Table("Customer")]
    public class CustomerModel : BaseModel
    {
        [Key]
        [Column(Order = 2)]
        [EmailAddress]
        [MaxLength(50)]
        public string Email { get; set; }
        [MaxLength(20)]
        public string FirstName { get; set; }
        [MaxLength(20)]
        public string LastName { get; set; }
        [MaxLength(20)]
        public string MiddleName { get; set; }
        //type "Male/Female"
        [MaxLength(1)]
        public string Gender { get; set; }
        [MaxLength(150)]
        public string Address { get; set; }
        [DataType(DataType.Date)]
        public DateTime BirthDate { get; set; }
        //type "Single/Married/Legally Separated/Divorced/Widowed"
        [MaxLength(1)]
        public string MaritalStatus { get; set; }
        //type "Business/Employment"
        [MaxLength(10)]
        public string SourceOfIncome { get; set; }
        //true - inactive / false -  active
        public bool IsDeleted { get; set; }
    }
}
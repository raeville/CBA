using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace LoanApi.Models
{
     [Table("LoanTyp")]
    public class LoanTypeModel : BaseModel
    {
         [MaxLength(20)]
         public string TypeDesc { get; set; }
    }
}
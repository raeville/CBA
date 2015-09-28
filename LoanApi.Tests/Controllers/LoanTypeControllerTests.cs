
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using LoanApi.Models;
using LoanApi.Tests.Models;
using LoanApi.Controllers;
using LoanApi.Tests.Controllers;
namespace LoanApi.Tests.Controllers
{
    public class LoanTypeControllerTestsData
    {
        public static IQueryable<LoanTypeModel> LoanTypes
        {
            get
            {

                var loanTypes = new List<LoanTypeModel> 
            { 
                new LoanTypeModel { 
                    Id = 1, 
                    TypeDesc = "Home loans",
                    IsDeleted = false, 
                    CreateDate = DateTime.UtcNow.Date, 
                    UpdateDate = DateTime.UtcNow.Date                
                }, 
                new LoanTypeModel { 
                    Id = 2, 
                    TypeDesc = "Personal Loans",
                    IsDeleted = false, 
                    CreateDate = DateTime.UtcNow.Date, 
                    UpdateDate = DateTime.UtcNow.Date                
                },                 
            };

                return loanTypes.AsQueryable();
            }
        }
    }
}
[TestClass]
public class LoanTypeControllerTests
{

    private TestDb db = new TestDb();
    [TestMethod]
    public void LoanTypeGet()
    {
        db.AddSet(LoanTypeControllerTestsData.LoanTypes);

        // Arrange
        LoanTypeController controller = new LoanTypeController(db);
        // Act
        IEnumerable<LoanTypeModel> result = controller.Get();
        // Assert
        Assert.IsNotNull(result);
    }

    [TestMethod]
    public void LoanTypeControllerTestsByType()
    {
        var type = "Personal Loans";
        db.AddSet(LoanTypeControllerTestsData.LoanTypes);

        // Arrange
        LoanTypeController controller = new LoanTypeController(db);

        // Act
        var result = controller.Get(type);

        // Assert
        Assert.IsNotNull(result);
    }

    [TestMethod]
    public void LoanTypePost()
    {
        // Arrange
        LoanTypeController controller = new LoanTypeController(db);

        LoanTypeModel _lonType = new LoanTypeModel();
        _lonType.Id = 5;
        _lonType.TypeDesc = "Personal Loans";
        _lonType.IsDeleted = false;
        _lonType.CreateDate = DateTime.UtcNow.Date;
        _lonType.UpdateDate = DateTime.UtcNow.Date;

        // Act
        var result = controller.Post(_lonType);
        // Assert
        Assert.IsNotNull(result);
    }

    [TestMethod]
    public void LoanTypePut()
    {
        // Arrange
        LoanTypeController controller = new LoanTypeController(db);

        LoanTypeModel _lonType = new LoanTypeModel();
        //_lonType.Id = 5;
        _lonType.TypeDesc = "Personal Loans";
        _lonType.IsDeleted = false;
        _lonType.CreateDate = DateTime.UtcNow.Date;
        _lonType.UpdateDate = DateTime.UtcNow.Date;

        // Act
        var result = controller.Put(_lonType);
        // Assert
        Assert.IsNotNull(result);
    }

    [TestMethod]
    public void LoanTypePutNotFound()
    {
        // Arrange
        LoanTypeController controller = new LoanTypeController(db);

        LoanTypeModel _lonType = new LoanTypeModel();
        _lonType.Id = 6;
        _lonType.TypeDesc = "Personal Loans";
        _lonType.IsDeleted = false;
        _lonType.CreateDate = DateTime.UtcNow.Date;
        _lonType.UpdateDate = DateTime.UtcNow.Date;

        // Act
        var result = controller.Put(_lonType);
        // Assert
        Assert.IsNotNull(result);
    }

    [TestMethod]
    public void LoanTypDelete()
    {

        db.AddSet(LoanTypeControllerTestsData.LoanTypes);

        // Arrange
        LoanTypeController controller = new LoanTypeController(db);

        // Act
        var result = controller.Delete(5);
        // Assert
        Assert.IsNotNull(result);
    }

    [TestMethod]
    public void LoanTypDeleteNotFound()
    {

        db.AddSet(LoanTypeControllerTestsData.LoanTypes);

        // Arrange
        LoanTypeController controller = new LoanTypeController(db);

        // Act
        var result = controller.Delete(5);
        // Assert
        Assert.IsNotNull(result);
    }
}


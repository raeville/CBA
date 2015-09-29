namespace LoanApi.CBAContextDbMigration
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Customer",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Email = c.String(nullable: false, maxLength: 50),
                        FirstName = c.String(maxLength: 20),
                        LastName = c.String(maxLength: 20),
                        MiddleName = c.String(maxLength: 20),
                        Gender = c.String(maxLength: 1),
                        Address = c.String(maxLength: 150),
                        BirthDate = c.DateTime(nullable: false),
                        MaritalStatus = c.String(maxLength: 1),
                        SourceOfIncome = c.String(maxLength: 10),
                        IsDeleted = c.Boolean(nullable: false),
                        CreateDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => new { t.Id, t.Email });
            
            CreateTable(
                "dbo.LoanType",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        TypeDesc = c.String(maxLength: 20),
                        IsDeleted = c.Boolean(nullable: false),
                        CreateDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.LoanType");
            DropTable("dbo.Customer");
        }
    }
}

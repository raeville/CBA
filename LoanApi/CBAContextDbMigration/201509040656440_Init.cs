namespace LoanApi.CBAContextDbMigration
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Init : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.CustomerModels", newName: "Customer");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.Customer", newName: "CustomerModels");
        }
    }
}

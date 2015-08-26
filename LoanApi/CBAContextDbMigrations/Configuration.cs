namespace LoanApi.CBAContextDbMigrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using LoanApi.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<LoanApi.Models.CBAContextDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            MigrationsDirectory = "LoanApi.Models.CBAContextDb";
        }

        protected override void Seed(LoanApi.Models.CBAContextDb context)
        {
            var hashit = new PasswordHasher();
            var adduser = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));            

            //Admin
            if (!adduser.Users.Any(r => r.UserName == "admin@cba.com"))
            {             
                var admin = new ApplicationUser()
                {
                    UserName = "admin@cba.com",
                    Email = "admin@cba.com",
                    EmailConfirmed = true,
                    PasswordHash = hashit.HashPassword("P@ssw0rd")
                };
                adduser.Create(admin);

            }
        }
    }
}

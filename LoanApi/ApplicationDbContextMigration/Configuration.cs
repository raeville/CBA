namespace LoanApi.ApplicationDbContextMigration
{
    using LoanApi.Models;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<LoanApi.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            MigrationsDirectory = @"ApplicationDbContextMigration";
        }

        protected override void Seed(LoanApi.Models.ApplicationDbContext context)
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

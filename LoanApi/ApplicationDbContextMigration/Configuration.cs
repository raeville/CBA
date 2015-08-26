namespace LoanApi.ApplicationDbContextMigration
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using LoanApi.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<LoanApi.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            MigrationsDirectory = @"ApplicationDbContextMigration";
        }

        protected override void Seed(LoanApi.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

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

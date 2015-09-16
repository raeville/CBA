namespace LoanApi.ApplicationDbContextMigration
{
    using LoanApi.Controllers;
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

            var adduser = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            //Admin
            if (!adduser.Users.Any(r => r.UserName == "admin@cba.com"))
            {
                admin = new ApplicationUser()
                {
                    UserName = "admin@cba.com",
                    Email = "admin@cba.com",
                    EmailConfirmed = true,
                    PasswordHash = hashit.HashPassword("P@ssw0rd")
                };
                adduser.Create(admin);
            }
            //Creating Role
            var userRole = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            if (!userRole.RoleExists("Admin") || !userRole.RoleExists("LoanOfficer"))
            {
                userRole.Create(new IdentityRole { Name = "Admin" });
                userRole.Create(new IdentityRole { Name = "LoanOfficer" });
            }
            //Assigning Role
            var user = context.Users.Where(u => u.UserName.Equals("admin@cba.com", StringComparison.CurrentCultureIgnoreCase)).FirstOrDefault();
            if (user.UserName == "admin@cba.com")
            {
                var roles = context.Roles.ToList();
                if (user != null)
                {
                    if (roles.Count != 0)
                    {
                        foreach (var role in roles)
                        {
                            adduser.AddToRole(user.Id, role.Name);
                        }

                    }

                }
            }

        }
    }
}

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

            var userManager = new ApplicationUserManager(
                new UserStore<ApplicationUser, ApplicationRole, string,
                    ApplicationUserLogin, ApplicationUserRole,
                    ApplicationUserClaim>(context));

            var roleManager = new ApplicationRoleManager(new RoleStore<ApplicationRole, string, ApplicationUserRole>(context));

            //Create user Admin if it does not exist
            var admin = userManager.FindByName("admin@cba.com");
            if (admin == null)
            {
                admin = new ApplicationUser()
                {
                    UserName = "admin@cba.com",
                    Email = "admin@cba.com",
                    EmailConfirmed = true,
                    PasswordHash = hashit.HashPassword("P@ssw0rd")
                };

                userManager.Create(admin);
            }

            //Create Role Admin if it does not exist
            var adminRole = roleManager.FindByName("Admin");
            if (adminRole == null)
            {
                adminRole = new ApplicationRole("Admin");
                roleManager.Create(adminRole);
                roleManager.Create(new ApplicationRole { Name = "LoanOfficer" });
            }

            // Add user admin to Role Admin if not already added
            var rolesForUser = userManager.GetRoles(admin.Id);
            if (!userManager.GetRoles(admin.Id).Contains(adminRole.Name))
            {
                var result = userManager.AddToRole(admin.Id, adminRole.Name);
            }

        }
    }
}

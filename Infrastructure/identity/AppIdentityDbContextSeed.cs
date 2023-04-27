using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Mostafa",
                    Email = "mostafa@test.com",
                    UserName = "mostafa@test.com",
                    Address = new Address
                    {
                        FirstName = "mostafa",
                        LastName = "salah",
                        Street = "15 hassan abdo",
                        City = "Cairo",
                        State = "Ainshams",
                        ZipCode = "11772"
                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
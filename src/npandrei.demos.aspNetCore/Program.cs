using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace Npandrei.Demos.AspNetCore
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                        .UseKestrel()
                        .UseContentRoot(Directory.GetCurrentDirectory())
                        .UseStartup<Startup>()
                        .UseEnvironment("Development")
                        .Build();

            host.Run();
            // Console.WriteLine("Hello World!");
            // var name = Console.ReadLine();
            // Console.WriteLine($"Hello {name}");
        }
    }
}

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using npandrei.Common;

namespace Npandrei.Demos.AspNetCore
{
    // dotnet run -p src/npandrei.demos.aspNetCore
    // dotnet run from aspNetCore folder
    public class Startup
    {
        public IConfigurationRoot Configuration { get; set; }

        public Startup(IHostingEnvironment env)
        {
            // nothing usefull here...but just to show the web.config's appSettings replacement
            Configuration = new ConfigurationBuilder()
                    .SetBasePath(env.ContentRootPath)
                    .AddJsonFile("appsettings.json", true)
                    .Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddDirectoryBrowser();
            //services.AddRouting();
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseFileServer(); //some "related" options : app.UseDirectoryBrowser(); //app.UseStaticFiles();

            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}"
                );
            });

            // configure some custom routes that are not handled by MVC
            // var routeBuilder = new RouteBuilder(app);
            // routeBuilder.MapGet("post/{postNumber:int}", 
            //         context => context.Response.WriteAsync($"post {context.GetRouteValue("postNumber")}"));
            // var router = routeBuilder.Build();
            // app.UseRouter(router);

            // app.Run(
            //     async (context) =>
            //     {
            //         var nr = int.Parse(Configuration["key"]);
            //         var res = MathHelper.Sqrt(nr);
            //         await context.Response.WriteAsync($"Hello {res}");
            //     }
            // );
        }
    }
}
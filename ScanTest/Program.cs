using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScanTest
{
    public class Program
    {
//#if DEBUG
//        public static void Main(string[] args)
//        {
//            // use this to allow command line parameters in the config
//            var configuration = new ConfigurationBuilder()
//                .AddCommandLine(args)
//                .Build();


//            var hostUrl = configuration["hosturl"];
//            if (string.IsNullOrEmpty(hostUrl))
//                hostUrl = "http://0.0.0.0:6000";


//            var host = new WebHostBuilder()
//                .UseKestrel()
//                .UseUrls(hostUrl)
//                .UseContentRoot(System.IO.Directory.GetCurrentDirectory())
//                .UseIISIntegration()
//                .UseStartup<Startup>()
//                .UseConfiguration(configuration)
//                .Build();

//            host.Run();
//        }
//#else
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }
        
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
//#endif
    }
}

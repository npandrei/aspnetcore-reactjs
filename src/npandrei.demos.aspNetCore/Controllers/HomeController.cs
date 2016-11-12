using System;
using Microsoft.AspNetCore.Mvc;
using npandrei.Common;
using Npandrei.Demos.AspNetCore.Models;

namespace Npandrei.Demos.AspNetCore.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculate(CalculateModel model)
        {
            // this is just to show how to use a lib project
            var sum = MathHelper.Sum(model.a, model.b);

            return Json(new { result = sum.ToString() });
        }
    }
}
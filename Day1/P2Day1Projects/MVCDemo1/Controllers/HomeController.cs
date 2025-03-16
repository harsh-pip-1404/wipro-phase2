using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MVCDemo1.Models;

namespace MVCDemo1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public string sampledemo1()
        {
            return "My first MVC Application ";
        }

        public string sampledemo2(int age, string name)
        {

            return "The name of the person is: " + name + " is having age :" + age;

        }

        public string sampledemo3(int age, string name, string loc)
        {
            return "The name of the person is: " + name + " is having age :" + age + "  living in : " + loc;
        }
        public IActionResult sampledemo4()
        {
            int age = 23;
            string name = "kiran";

            ViewBag.age1 = age;
            ViewBag.name1 = name;
            return View();
        }

        public IActionResult singleobjectpassing()
        {
            Employee emp = new Employee()
            {
                EmployeeID = 101,
                EmpName = "sanjay",
                Salary = 45000
            };
            return View(emp);
        }
        List<Employee> emplist = new List<Employee>()
 {
     new Employee{EmployeeID=101,EmpName="ravi",Salary=23000,ImageUrl="/images/pic1.webp"},

     new Employee{EmployeeID=102,EmpName="sita",Salary=43000,ImageUrl="/images/pic2.webp"},

     new Employee{EmployeeID=103,EmpName="mahesh",Salary=53000,ImageUrl="/images/pic1.webp"},

     new Employee{EmployeeID=104,EmpName="radhika",Salary=22000,ImageUrl="/images/pic2.webp"},

 };





        public IActionResult multiobjectpassing()
        {

            return View(emplist);
        }

        public IActionResult displayemp(int empid)
        {
            Employee empfound = (from e in emplist where e.EmployeeID == empid select e).FirstOrDefault();
            if (empfound != null)
            {
                return View(empfound);
            }
            else
            {
                return Content("No employee found");
            }
        }
        public IActionResult website()
        {
            return View();
        }
        //---------------------------------------------------------------------------------------
        List<Department> deptlist = new List<Department>()
     {
         new Department{Deptid=10,DeptName="Sales"},
         new Department{Deptid=20,DeptName="HR"},
         new Department{Deptid=30,DeptName="Software"}
     };

        public IActionResult EmpDeptViewModelDemo(int empid)
        {
            var query1 = deptlist.ToList();
            Employee emp = emplist.Where(x => x.EmployeeID == empid).FirstOrDefault();
            var query2 = emp;

            // return View(query1, query2); not happening
            EmpDeptViewModel empdeptobj = new EmpDeptViewModel()
            {
                deptlist = query1,
                emp = query2,
                date = DateTime.Now
            };
            return View(empdeptobj);

        }
    }
}


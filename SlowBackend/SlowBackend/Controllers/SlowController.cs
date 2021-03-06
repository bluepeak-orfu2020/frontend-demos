using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SlowBackend.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SlowController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage Post([FromBody] string data)
        {
            Console.WriteLine($"Got data {data}");
            Thread.Sleep(5000);
            return new HttpResponseMessage(HttpStatusCode.NoContent);
        }
    }
}

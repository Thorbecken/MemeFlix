using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MemeFlix.Controllers
{
    [Route("api/[controller]")]
    public class EmbeddedVideoController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "https://www.youtube.com/embed/kfVsfOSbJY0", "https://www.youtube.com/embed/dQw4w9WgXcQ" };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet("[action]")]
        public IEnumerable<Meme> Memes()
        {
            return Enumerable.Range(1, memeStrings.Length).Select(x => new Meme(memeStrings[x]));
        }
        /*public string[] Memes()
        {
            return memeStrings;
        }*/

        public static string[] memeStrings = new[]
        {
            "https://www.youtube.com/embed/kfVsfOSbJY0", "https://www.youtube.com/embed/dQw4w9WgXcQ"
        };

        public class Meme
        {
            public string url { get; set; }

            public Meme(string url)
            {
                this.url = url;
            }
        }
    }
}

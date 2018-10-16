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
        public static string[] memeStrings = new[]
        {
            "https://www.youtube.com/embed/kfVsfOSbJY0", "https://www.youtube.com/embed/dQw4w9WgXcQ"
        };

        [HttpGet("[action]")]
        public IEnumerable<Meme> Memes()
        {
            return Enumerable.Range(1, memeStrings.Length).Select(x => new Meme(memeStrings[x-1]));
        }
                
        public class Meme
        {
            public string Url { get; set; }

            public Meme(string url)
            {
                this.Url = url;
            }
        }
    }
}

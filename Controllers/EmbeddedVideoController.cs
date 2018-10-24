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
        public static Meme[] memeStrings = new[]
        {
            new Meme {
            Name = "trololo",
            Url = "oavMtUWDBTM"
            },
            new Meme{
            Name = "rickroll",
            Url = "dQw4w9WgXcQ"
            },
            new Meme{
            Name = "darude - sandstorm",
            Url = "y6120QOlsfU"
            }
        };

        [HttpGet("[action]")]
        public IEnumerable<Meme> Memes()
        {
            return Enumerable.Range(1, memeStrings.Length).Select(x => new Meme(memeStrings[x-1].Name, memeStrings[x - 1].Url));
        }
                
        public class Meme
        {
            public string Name { get; set; }
            public string Url { get; set; }

            public Meme() { }

            public Meme(string name,string url)
            {
                this.Name = name;
                this.Url = url;
            }
        }
    }
}

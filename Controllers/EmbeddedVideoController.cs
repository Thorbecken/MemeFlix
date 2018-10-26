using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MemeFlix.Factories;
using MemeFlix.Models;

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

        [HttpGet("[action]")]
        public IEnumerable<Meme> MemePlaylist(string playList)
        {
           return MemeListFactory.GetExcelFile(playList);
        }
    }
}

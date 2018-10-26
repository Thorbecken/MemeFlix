using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemeFlix.Models
{
    public class MemeList
    {
        public int MemeListId { get; set; }
        public string Name { get; set; }

        public ICollection<Meme> Memes { get; set; }
    }
}

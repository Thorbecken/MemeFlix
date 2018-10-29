using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MemeFlix.Models
{
    public class MemeList
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Meme> Memes { get; set; }

        public MemeList() { }
        public MemeList(List<Meme> memeList, string name) {
            this.Memes = memeList;
            this.Name = name;
        }
    }
}

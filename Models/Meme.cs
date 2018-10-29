using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MemeFlix.Models
{
    public class Meme
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }

        public Meme() { }
        public Meme(string name, string url)
        {
            this.Name = name;
            this.Url = url;
        }
    }
}
using MemeFlix.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemeFlix.Services
{
    public class MemeContext : DbContext
    {
        public MemeContext(DbContextOptions<MemeContext> options)
            : base(options)
        { }

        public DbSet<Meme> Memes { get; set; }
        public DbSet<MemeList> MemeLists { get; set; }
    }
}

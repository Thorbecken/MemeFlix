using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MemeFlix.Models;
using MemeFlix.Services;

namespace MemeFlix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemeListsController : ControllerBase
    {
        private readonly MemeContext _context;

        public MemeListsController(MemeContext context)
        {
            _context = context;
        }

        // GET: api/MemeLists
        [HttpGet]
        public IEnumerable<MemeList> GetMemeLists()
        {
            return _context.MemeLists;
        }

        // GET: api/MemeLists/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMemeList([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var memeList = await _context.MemeLists.FindAsync(id);

            if (memeList == null)
            {
                return NotFound();
            }

            return Ok(memeList);
        }

        // PUT: api/MemeLists/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMemeList([FromRoute] int id, [FromBody] MemeList memeList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != memeList.MemeListId)
            {
                return BadRequest();
            }

            _context.Entry(memeList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MemeListExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MemeLists
        [HttpPost]
        public async Task<IActionResult> PostMemeList([FromBody] MemeList memeList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.MemeLists.Add(memeList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMemeList", new { id = memeList.MemeListId }, memeList);
        }

        // DELETE: api/MemeLists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMemeList([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var memeList = await _context.MemeLists.FindAsync(id);
            if (memeList == null)
            {
                return NotFound();
            }

            _context.MemeLists.Remove(memeList);
            await _context.SaveChangesAsync();

            return Ok(memeList);
        }

        private bool MemeListExists(int id)
        {
            return _context.MemeLists.Any(e => e.MemeListId == id);
        }
    }
}
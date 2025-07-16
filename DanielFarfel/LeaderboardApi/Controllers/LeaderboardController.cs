using Microsoft.AspNetCore.Mvc;
using LeaderboardApi.Models;

namespace LeaderboardApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LeaderboardController : ControllerBase
    {
        private static readonly List<ScoreEntry> Scores = new()
        {
            new ScoreEntry { Id = 1, Name = "TopDog", Score = 420, Date = DateTime.UtcNow.AddDays(-1), Instagram = "@topdog123" },
            new ScoreEntry { Id = 2, Name = "JDW", Score = 390, Date = DateTime.UtcNow.AddDays(-2) },
            new ScoreEntry { Id = 3, Name = "MRC", Score = 380, Date = DateTime.UtcNow.AddDays(-3) },
            new ScoreEntry { Id = 4, Name = "LOP", Score = 360, Date = DateTime.UtcNow.AddDays(-4) },
            new ScoreEntry { Id = 5, Name = "XYZ", Score = 350, Date = DateTime.UtcNow.AddDays(-5) }
        };

        [HttpGet]
        public ActionResult<IEnumerable<ScoreEntry>> GetScores()
        {
            return Ok(Scores.OrderByDescending(s => s.Score).ToList());
        }

        [HttpPost]
        public ActionResult AddScore([FromBody] ScoreEntry newScore)
        {
            newScore.Id = Scores.Max(s => s.Id) + 1;
            newScore.Date = DateTime.UtcNow;
            Scores.Add(newScore);
            return CreatedAtAction(nameof(GetScores), new { id = newScore.Id }, newScore);
        }
    }
}

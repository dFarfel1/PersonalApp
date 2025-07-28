namespace LeaderboardApi.Models
{
    public class ScoreEntry
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Score { get; set; }
        public DateTime Date { get; set; }
        public string? Instagram { get; set; }
    }
}

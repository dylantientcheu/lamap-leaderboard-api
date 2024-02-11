import postgres from 'postgres'

const db = postgres(process.env['DB_TOKEN']);

export default eventHandler(() => {
  const stats = db`SELECT stats.points, stats.games_played, stats.wins, users.name
FROM stats
INNER JOIN users ON stats.user = users.id ORDER BY stats.points DESC LIMIT 10`
  return stats
})

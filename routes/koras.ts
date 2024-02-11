import postgres from 'postgres'

const db = postgres(process.env['DB_TOKEN']);

export default eventHandler(() => {
  const stats = db`SELECT stats.wins_dbl_kora, stats.wins_kora, users.name
FROM stats
INNER JOIN users ON stats.user = users.id ORDER BY stats.wins_kora DESC LIMIT 10`
  return stats
})

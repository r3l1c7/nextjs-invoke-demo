import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

async function isLoggedIn(): Promise<boolean> {
  // Logged‑in only if a session cookie is present
  const cookie = (await headers()).get('cookie') ?? ''
  return cookie.includes('session=')
}

export default async function Admin() {
  const h = await headers()
  const path =
    h.get('x-matched-path') ??
    h.get('x-invoke-path') ??
    ''

  if (!(await isLoggedIn()) && !path.startsWith('/login')) {
    redirect('/login')
  }

  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem' }}>
      <h1>🔐 Dashboard</h1>
      <p>Super‑secret analytics…</p>
    </main>
  )
}

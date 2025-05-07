// Public landing page
export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Welcome</h1>
      <p>This is a public page.  🟢 Anyone can read this.</p>
      <p>
        🛂 Protected area:{' '}
        <a href="/admin" style={{ textDecoration: 'underline' }}>
          /admin
        </a>
      </p>
    </main>
  )
}

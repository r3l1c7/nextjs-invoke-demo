// Very bare-bones “login” page to show the redirect works.
export default function LoginPage() {
    return (
      <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
        <h1>Login required</h1>
        <p>You were redirected here because /admin is protected.</p>
      </main>
    )
  }
  
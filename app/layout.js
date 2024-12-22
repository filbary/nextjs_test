// app/layout.js
import './globals.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  )
}

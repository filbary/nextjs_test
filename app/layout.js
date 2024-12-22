// app/layout.js
import Link from "next/link";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link> | <Link href="/about">About</Link>
          </nav>
        </header>

        {/* Main content area */}
        <main>{children}</main>

        <footer>
          <p>© 2024 My Next.js App random text</p>
        </footer>
      </body>
    </html>
  );
}

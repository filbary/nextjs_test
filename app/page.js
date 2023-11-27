import Link from 'next/link'

async function getBlogs() {
  const res = await fetch('https://656469caceac41c0761e22d5.mockapi.io/blogs')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const blogs = await getBlogs()

  return (
    <div>
      {
        blogs.map((blog, index) => (
          <div key={index}>
            {blog.name}
            <Link href={`/blog/${blog.id}`}>Read more...</Link>
          </div>
        ))
      }
    </div>
  )
}

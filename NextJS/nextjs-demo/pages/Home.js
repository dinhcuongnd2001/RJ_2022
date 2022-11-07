import Link from "next/link";

function Home() {
  const posts = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <ul>
      <li>
        {posts.map((post) => (
          <div key={post.id}>
            {/* <Link href={`/posts/${encodeURIComponent(post.id)}`}> */}
            <Link
              href={{
                pathname: "/posts/[pid]",
                query: { pid: post.id },
              }}
            >
              ID: {post.id}
            </Link>
          </div>
        ))}
      </li>
      <li>
        <Link href="/posts/abc?foo=bar">Also goes to pages/post/[pid].js</Link>
      </li>
      <li>
        <Link href="/posts/abc/a-comment">
          Go to pages/post/[pid]/[comment].js
        </Link>
      </li>
    </ul>
  );
}

export default Home;

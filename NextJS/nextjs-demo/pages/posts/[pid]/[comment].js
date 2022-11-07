import Link from "next/link";
import { useRouter } from "next/router";
function Comment() {
  const router = useRouter();
  const { pid, comment } = router.query;
  console.log(pid, comment);
  return (
    <>
      <h1>Post {pid}</h1>
      <h2>The comment: {comment}</h2>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}

export default Comment;

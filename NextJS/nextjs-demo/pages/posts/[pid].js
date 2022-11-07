import Link from "next/link";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
function FirstPost() {
  const router = useRouter();
  const { pid, ...props } = router.query;
  console.log(pid, props);
  return (
    <Layout>
      <h1>Post {pid}</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

export default FirstPost;

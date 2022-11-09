import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>DEMO</h1>
      <p>
        <Link href="/TH1/AboutUs">AboutUs</Link>
      </p>
      <p>
        <Link href="/TH1/Home">Home</Link>
      </p>
      <p>
        <Link href="/TH1/Blog">Blog</Link>
      </p>
      <p>
        <Link href="/TH1/Logout">Logout</Link>
      </p>
    </div>
  );
}

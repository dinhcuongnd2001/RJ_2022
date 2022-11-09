import React from "react";
import Link from "next/link";
function index() {
  return (
    <div>
      <div>
        <Link href="/BT1/home">Home</Link>
      </div>
      <div>
        <Link href="/BT1/about">About</Link>
      </div>
      <div>
        <Link href="/BT1/blog">Blog</Link>
      </div>
    </div>
  );
}

export default index;

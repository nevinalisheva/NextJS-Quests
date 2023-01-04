import Link from "next/link";
import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);
  return (
    <div>
      <h1>Hello there !</h1>
      <Link href="/information/about">About us</Link>
      <br></br>
      <Link href="/information/terms-of-use">Terms of Use</Link>
    </div>
  );
}

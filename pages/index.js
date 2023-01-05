import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css"

export default function IndexPage() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);
  return (
    <div>
      <h1>Hello there!</h1>
      <Image src="/favicon.ico" height={170} width={170} alt="next" />
    </div>
  );
}

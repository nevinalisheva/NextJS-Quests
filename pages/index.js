import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css"
import { getSortedPostsData } from "../lib/posts";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};


export default function IndexPage({ allPostsData }) {
  useEffect(() => {
    console.log("index page did mount");
  }, []);
  return (
    <div>
      <h1>Hello there!</h1>
      <Image src="/favicon.ico" height={100} width={100} alt="git" />
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
        
      </section>
    </div>
  );
}

import Layout from "../../components/layout/layout";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>posts</title>
      </Head>
      <h1>posts</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>
                <div>{title}</div>
                <div>{date}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

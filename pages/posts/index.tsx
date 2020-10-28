import { Layout } from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import { GetStaticProps } from "next";

const Posts = ({ allPostsData }) => {
  return (
    <Layout page="Posts">
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
};
export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

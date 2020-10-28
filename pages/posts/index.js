import { Layout } from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";

const Posts = ({ allPostsData }) => {
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
};
export default Posts;

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

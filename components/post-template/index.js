import { Layout } from "../layout";
import styles from "./style.module.scss";
import Head from "next/head";
import { Date } from "../date";
import Link from "next/link";

export const PostTemplate = ({ children, postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Layout>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />
        <Link href="/posts">
          <a>&laquo; back</a>
        </Link>
      </Layout>
    </>
  );
};

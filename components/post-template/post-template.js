import { Layout } from "../../components/layout/layout";
import styles from "./post-template.module.scss";

export const PostTemplate = ({ children, postData }) => {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <h2>{postData.date}</h2>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postData.content }}
      />
    </Layout>
  );
};

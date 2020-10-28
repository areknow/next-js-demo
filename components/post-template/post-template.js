import Layout from "../../components/layout/layout";
import styles from "./post-template.module.scss";

export default function PostTemplate({ children, postData }) {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <h2>{postData.date}</h2>
      <div className={styles.content}>{postData.content}</div>
    </Layout>
  );
}

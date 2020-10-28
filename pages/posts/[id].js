import PostTemplate from "../../components/post-template/post-template";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return <PostTemplate postData={postData}></PostTemplate>;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

import { PostTemplate } from "../../components/post-template/";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticProps } from "next";

const Post = ({ postData }) => {
  return <PostTemplate postData={postData}></PostTemplate>;
};
export default Post;

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

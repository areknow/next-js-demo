import { PostTemplate } from "../../components/post-template/post-template";
import { getAllPostIds, getPostData } from "../../lib/posts";

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
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

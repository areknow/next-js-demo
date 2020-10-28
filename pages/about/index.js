import Head from "next/head";
import { Layout } from "../../components/layout";
import { Alert } from "../../components/alert";

const About = () => {
  let alertColor = "error";
  const change = () => {
    alertColor = "success";
    console.log(alertColor);
  };
  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <h1>about</h1>
      <Alert type={alertColor}>alert message</Alert>
      <button onClick={change}>change</button>
    </Layout>
  );
};

export default About;

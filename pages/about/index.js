import Head from "next/head";
import Layout from "../../components/layout/layout";
import Alert from "../../components/alert/alert";

export default function About() {
  let alertColor = "error";
  const change = () => {
    alertColor = "success";
    console.log(alertColor);
  };
  return (
    <>
      <Layout>
        <Head>
          <title>about</title>
        </Head>
        <h1>about</h1>
        <Alert type={alertColor}>alert message</Alert>
        <button onClick={change}>change</button>
      </Layout>
    </>
  );
}

import Head from "next/head";
import { Layout } from "../../components/layout";
import { Alert } from "../../components/alert";
import { useState } from "react";

const About = () => {
  const [color, setColor] = useState("success");
  const changeAlert = () => {
    const newColor = color == "success" ? "error" : "success";
    setColor(newColor);
  };
  return (
    <Layout page="About">
      <Head>
        <title>about</title>
      </Head>
      <h1>about</h1>
      <Alert type={color}>alert message</Alert>
      <button onClick={() => changeAlert()}>change</button>
    </Layout>
  );
};
export default About;

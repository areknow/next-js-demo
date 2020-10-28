import "../styles/global.css";
import Nav from "../components/nav/nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />
    </>
  );
}

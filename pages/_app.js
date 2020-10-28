import "../styles/global.css";
import { Nav } from "../components/nav";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />
    </>
  );
};
export default App;

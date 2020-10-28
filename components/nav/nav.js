import Link from "next/link";
import styles from "./nav.module.scss";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={router.pathname == "/" ? styles.active : ""}>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li className={router.pathname == "/about" ? styles.active : ""}>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li className={router.pathname == "/posts" ? styles.active : ""}>
          <Link href="/posts">
            <a>posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

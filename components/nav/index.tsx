import Link from "next/link";
import styles from "./style.module.scss";
import { useRouter } from "next/router";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={checkIfActive("/")}>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li className={checkIfActive("/about")}>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li className={checkIfActive("/posts")}>
          <Link href="/posts">
            <a>posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const checkIfActive = (name) => {
  const router = useRouter();
  if (router.pathname.split("/")[1] == name.split("/")[1]) {
    return styles.active;
  }
};

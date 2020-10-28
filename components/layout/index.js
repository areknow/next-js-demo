import styles from "./style.module.scss";

export const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      {children}
      {home && <img src="/hero.jpg" />}
    </div>
  );
};

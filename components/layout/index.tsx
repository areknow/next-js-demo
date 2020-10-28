import styles from "./style.module.scss";

export const Layout = ({ children, page }) => {
  return (
    <div className={styles.container}>
      {children}
      {page == "Home" && <img src="/hero.jpg" />}
    </div>
  );
};

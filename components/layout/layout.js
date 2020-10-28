import styles from "./layout.module.css";

export const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      {home && <img src="/vercel.svg" alt="Vercel Logo" className="logo" />}
      {children}
    </div>
  );
};

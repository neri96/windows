import { ReactNode } from "react";

import styles from "./style.module.scss";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles.background} />
      <div className={styles.page__body}>{children}</div>
    </>
  );
};

export default PageLayout;

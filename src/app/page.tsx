import type { Metadata } from "next";

import { HomeContainer } from "./components/features/Home";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "/",
  },
};

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <HomeContainer />
      </div>
    </div>
  );
};

export default Home;

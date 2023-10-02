"use client";

import { HomeContainer } from "./components/features/Home";

import styles from "./page.module.scss";

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

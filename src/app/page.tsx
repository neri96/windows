import type { Metadata } from "next";

import { HomeContainer } from "./components/features/Home";

import PageLayout from "./components/ui/PageLayout";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "/",
  },
};

const Home = () => {
  return (
    <PageLayout>
      <div className={styles.home}>
        <HomeContainer />
      </div>
    </PageLayout>
  );
};

export default Home;

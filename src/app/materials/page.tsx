import type { Metadata } from "next";

import { MaterialsContainer } from "../components/features/Materials";

import PageLayout from "../components/ui/PageLayout";

export const metadata: Metadata = {
  title: "Materials",
  alternates: {
    canonical: "/materials",
  },
};

const Materials = () => {
  return (
    <PageLayout>
      <MaterialsContainer />
    </PageLayout>
  );
};

export default Materials;

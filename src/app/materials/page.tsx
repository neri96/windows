import type { Metadata } from "next";

import { MaterialsContainer } from "../components/features/Materials";

export const metadata: Metadata = {
  title: "Materials",
  alternates: {
    canonical: "/materials",
  },
};

const Materials = () => {
  return <MaterialsContainer />;
};

export default Materials;

import type { Metadata } from "next";

import { OurWorkGallery } from "../components/features/OurWork";

import PageLayout from "../components/ui/PageLayout";

export const metadata: Metadata = {
  title: "Our Work",
  alternates: {
    canonical: "/ourwork",
  },
};

const OurWork = () => {
  return (
    <PageLayout>
      <OurWorkGallery />
    </PageLayout>
  );
};

export default OurWork;

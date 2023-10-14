import type { Metadata } from "next";

import { OurWorkGallery } from "../components/features/OurWork";

export const metadata: Metadata = {
  title: "Our Work",
  alternates: {
    canonical: "/ourwork",
  },
};

const OurWork = () => {
  return (
    <div>
      <OurWorkGallery />
    </div>
  );
};

export default OurWork;

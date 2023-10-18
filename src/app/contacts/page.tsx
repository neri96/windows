import type { Metadata } from "next";

import { ContactContainer } from "../components/features/Contact";

import PageLayout from "../components/ui/PageLayout";

export const metadata: Metadata = {
  title: "Contacts",
  alternates: {
    canonical: "/contacts",
  },
};

const Contact = () => {
  return (
    <PageLayout>
      <ContactContainer />
    </PageLayout>
  );
};

export default Contact;

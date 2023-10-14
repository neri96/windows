import type { Metadata } from "next";

import { ContactContainer } from "../components/features/Contact";

export const metadata: Metadata = {
  title: "Contacts",
  alternates: {
    canonical: "/contacts",
  },
};

const Contact = () => {
  return <ContactContainer />;
};

export default Contact;

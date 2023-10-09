import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import styles from "./ContactContainer.module.scss";

export const ContactContainer = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactBody}>
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import styles from "./ContactContainer.module.scss";

export const ContactContainer = () => {
  return (
    <div className={styles.contact}>
      {/* <div className={styles.contactTitle}>
        <h2>Contact Us</h2>
      </div> */}
      <div className={styles.contactBody}>
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

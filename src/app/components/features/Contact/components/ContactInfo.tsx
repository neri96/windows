import Image from "next/image";

import LocationIcon from "../../../../assets/images/icons/location.svg";
import PhoneIcon from "../../../../assets/images/icons/phone.svg";
import EmailIcon from "../../../../assets/images/icons/email.svg";

import YelpIcon from "../../../../assets/images/icons/yelp-colored.svg";

import styles from "./ContactInfo.module.scss";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.contactInfo__wrap}>
        <div>
          <div className={styles.contactInfo__section}>
            <div className={styles.contactInfo__icon}>
              <Image priority={true} src={LocationIcon} alt="Address" />
            </div>
            <div className={styles.contactInfo__contact}>
              <h4>1130 Burnett Ave. # N Concord, CA 94520</h4>
            </div>
          </div>
          <div className={styles.contactInfo__section}>
            <div className={styles.contactInfo__icon}>
              <Image priority={true} src={EmailIcon} alt="Email" />
            </div>
            <div className={styles.contactInfo__contact}>
              <h4>
                <a href="mailto:windows4ual@gmail.com">windows4ual@gmail.com</a>
              </h4>
            </div>
          </div>
          <div className={styles.contactInfo__section}>
            <div className={styles.contactInfo__icon}>
              <Image priority={true} src={PhoneIcon} alt="Email" />
            </div>
            <div className={styles.contactInfo__contact}>
              <h4>
                <a href="tel:9253933578">925-393-35-78</a>
              </h4>
            </div>
          </div>
          <div className={styles.contactInfo__footer}>
            <Image priority={true} src={YelpIcon} alt="Yelp" />
            <h2>Find us on Yelp</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

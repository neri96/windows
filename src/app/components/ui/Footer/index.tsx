import Link from "next/link";

import styles from "./styles.module.scss";

import { navigationList } from "@/app/globalConst";

import Image from "next/image";
import classnames from "classnames";

import ArrowIcon from "../../../assets/images/icons/arrow.svg";
import FbIcon from "../../../assets/images/icons/facebook.svg";
// import IgIcon from "../../../assets/images/icons/instagram.svg";
import YelpIcon from "../../../assets/images/icons/yelp.svg";

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div
        className={classnames(styles.mainFooterSection, styles.mainFooterNav)}
      >
        <nav>
          <ul className={styles.mainFooterNavList}>
            {navigationList.map(
              ({ id, page }: { id: string; page: string }) => {
                return (
                  <li key={id}>
                    <Link href={`/${page}`}>{page || "home"}</Link>
                    <Image
                      priority={true}
                      src={ArrowIcon}
                      alt={`Procceed to ${page || "Home"} page`}
                    />
                  </li>
                );
              }
            )}
          </ul>
        </nav>
      </div>
      <div
        className={classnames(
          styles.mainFooterSection,
          styles.mainFooterContacts
        )}
      >
        <span>1130 Burnett Ave. # N Concord, CA 94520</span>
        <a href="mailto:windows4ual@gmail.com">windows4ual@gmail.com</a>
        <a href="tel:9253933578">925-393-35-78</a>
      </div>
      <div
        className={classnames(
          styles.mainFooterSection,
          styles.mainFooterSocial
        )}
      >
        <div className={styles.mainFooterIcon}>
          <a href="https://www.facebook.com/profile.php?id=61550266862780">
            <span>Facebook</span>
            <Image priority={true} src={FbIcon} alt={`Facebook`} />
          </a>
        </div>
        {/* <a href="https://www.instagram.com">
          <Image priority={true} src={IgIcon} alt={`Instagram`} />
        </a> */}
        <div className={styles.mainFooterIcon}>
          <span>Yelp</span>
          <a href="https://www.yelp.com/biz/windows4u-concord-2">
            <Image priority={true} src={YelpIcon} alt={`Yelp`} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

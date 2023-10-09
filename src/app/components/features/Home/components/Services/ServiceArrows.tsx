import { ReactNode } from "react";

import Image from "next/image";

import classnames from "classnames";

import ArrowIcon from "@/app/assets/images/icons/arrow-side.svg";

import styles from "./ServiceArrows.module.scss";

const ServiceArrows = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Image
        className={classnames(
          styles.services__leftArrow,
          styles.services__sideArrow
        )}
        priority={true}
        src={ArrowIcon}
        alt="Option to choose"
      />
      {children}
      <Image
        className={classnames(
          styles.services__rightArrow,
          styles.services__sideArrow
        )}
        priority={true}
        src={ArrowIcon}
        alt="Option to choose"
      />
    </>
  );
};

export default ServiceArrows;

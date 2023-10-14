"use client";

import { ReactNode, forwardRef, ForwardRefRenderFunction } from "react";

import { motion } from "framer-motion";

import styles from "./styles.module.scss";

const PageSection: ForwardRefRenderFunction<
  HTMLElement,
  {
    title: string;
    style?: { [key: string]: string };
    children: ReactNode;
  }
> = ({ title, style, children }, ref) => {
  return (
    <section ref={ref} className={styles.pageSection} style={style}>
      <header>
        <h1>
          <span>{title}</span>
          <motion.span
            className={styles.underline}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { width: "100%" },
              hidden: { width: "0" },
            }}
          />
        </h1>
      </header>
      <div className={styles.pageSection__body}>{children}</div>
    </section>
  );
};

export default forwardRef(PageSection);

import { useCallback } from "react";
import { motion } from "framer-motion";

import Link from "next/link";

import Button from "../../../ui/Button";

import styles from "./Intro.module.scss";

const slideUpVariant = {
  visible: { y: "0", opacity: 1 },
  hidden: { y: "20px", opacity: 0 },
};

const Intro = () => {
  const getTransition = useCallback(
    (delay: number) => ({ delay, duration: 0.3 }),
    []
  );

  return (
    <div className={styles.intro}>
      <div className={styles.intro__text}>
        <motion.h1
          className={styles.intro__title}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.3,
            type: "spring",
            bounce: 0.45,
            stiffness: 100,
          }}
          variants={{
            visible: { scale: 1 },
            hidden: { scale: 0 },
          }}
        >
          Windows 4U
        </motion.h1>
        <motion.h4
          className={styles.intro__descr}
          initial="hidden"
          animate="visible"
          transition={getTransition(0.5)}
          variants={slideUpVariant}
        >
          Window and Door installation and repair services to homeowners and
          businesses all over East Bay
        </motion.h4>
        <motion.h3
          initial="hidden"
          animate="visible"
          transition={getTransition(0.8)}
          variants={slideUpVariant}
        >
          925-393-35-78
        </motion.h3>
        <motion.div
          className={styles.intro__btn}
          initial="hidden"
          animate="visible"
          transition={getTransition(0.8)}
          variants={slideUpVariant}
        >
          <Link href="/contacts">
            <Button handleClick={() => null}>
              <span className={styles.intro__btnTitle}>Get in Touch</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;

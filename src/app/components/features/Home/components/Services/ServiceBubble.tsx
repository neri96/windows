import { ReactNode } from "react";
import { motion } from "framer-motion";

import classnames from "classnames";

import styles from "./ServiceBubble.module.scss";

const bubbleVariants = {
  hidden: {
    scale: 0.8,
    filter: "brightness(30%)",
  },
  visible: {
    scale: 1,
    filter: "brightness(100%)",
  },
};

const ServiceBubble = ({
  isCurrentOption,
  handleClick,
  children,
}: {
  isCurrentOption: boolean;
  handleClick: () => void;
  children: ReactNode;
}) => {
  return (
    <motion.div
      variants={bubbleVariants}
      initial={isCurrentOption ? "visible" : "hidden"}
      animate={isCurrentOption ? "visible" : "hidden"}
      exit="hidden"
      transition={{
        duration: 0.3,
        type: "spring",
        damping: 10,
        stiffness: 150,
      }}
      className={styles.services__option}
      onClick={handleClick}
    >
      <div
        className={classnames(styles.services__bubble, {
          [styles.chosen]: isCurrentOption,
        })}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default ServiceBubble;

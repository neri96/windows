import { ReactNode } from "react";

import { motion } from "framer-motion";

import Button from "../Button";

import styles from "./styles.module.scss";

const Modal = ({
  btnTitle,
  closeModal,
  children,
  additionalStyles,
}: {
  closeModal: () => void;
  btnTitle?: string;
  children: ReactNode;
  additionalStyles?: { [key: string]: string };
  progressBar?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.backdrop}
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        style={additionalStyles}
      >
        <div className={styles.modal__content}>
          <div className={styles.modal__body}>{children}</div>
          <div className={styles.modal__footer}>
            <Button handleClick={closeModal}>{btnTitle || "Ok"}</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";

import SelectArrowIcon from "../../../assets/images/icons/select-arrow.svg";

import styles from "./styles.module.scss";

const Select = ({
  label,
  defaultOption,
  chosenOption,
  list,
  error,
  handleClick,
  clearError,
}: {
  label?: string;
  defaultOption?: string;
  chosenOption: string;
  list: string[];
  error?: string;
  handleClick?: (arg1: string) => void;
  clearError?: () => void;
}) => {
  const [listOpen, setListOpen] = useState<boolean>(false);

  const chosenOptionCap = chosenOption
    ? chosenOption.charAt(0).toUpperCase() + chosenOption.slice(1)
    : null;

  const toggleList = () => {
    clearError && clearError();
    setListOpen((list) => !list);
  };

  const handleOption = (option: string) => {
    handleClick && handleClick(option);
    toggleList();
  };

  return (
    <div className={`${styles.select} ${listOpen ? styles.select__open : ""}`}>
      {label ? <span className={styles.select__label}>{label}</span> : null}
      {error ? <span style={{ color: "red" }}>{error}</span> : null}
      <div className={styles.select__field} onClick={toggleList}>
        <span className={styles.select__chosenOption}>
          {chosenOptionCap || defaultOption}
        </span>
        <div className={styles.select__icon}>
          <Image
            priority={true}
            src={SelectArrowIcon}
            alt={listOpen ? "Close" : "Open"}
          />
        </div>
      </div>

      <AnimatePresence>
        {listOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.select__options}
          >
            {list.map((option: string) => {
              return (
                <li key={option} onClick={() => handleOption(option)}>
                  {option}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;

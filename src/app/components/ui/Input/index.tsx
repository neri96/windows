import { ChangeEvent, FocusEvent } from "react";

import styles from "./styles.module.scss";

const Input = ({
  label,
  name,
  value,
  isTextarea,
  style,
  error,
  placeholder,
  handleChange,
  handleFocus,
}: {
  label: string;
  name: string;
  value: string;
  style?: { [key: string]: string };
  error?: string;
  isTextarea?: boolean;
  placeholder?: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleFocus: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => {
  const Component = isTextarea ? "textarea" : "input";

  return (
    <div className={styles.input}>
      {label ? <label>{label}</label> : null}
      {error ? <span style={{ color: "red" }}>{error}</span> : null}
      <Component
        type="text"
        name={name}
        value={value}
        style={style}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default Input;

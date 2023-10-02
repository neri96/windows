import styles from "./styles.module.scss";

interface Props {
  children: any;
  isSubmitBtn?: boolean;
  handleClick?: () => void;
}

const Button = ({ isSubmitBtn = false, handleClick, children }: Props) => {
  return (
    <button
      type={isSubmitBtn ? "submit" : "button"}
      className={styles.button}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

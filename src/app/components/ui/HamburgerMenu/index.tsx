import classnames from "classnames";
import styles from "./styles.module.scss";

const HamburgerMenu = ({
  isOpen,
  handleOpen,
}: {
  isOpen: boolean;
  handleOpen: () => void;
}) => {
  return (
    <div
      className={classnames(styles.hamburgerMenu, { [styles.open]: isOpen })}
      onClick={handleOpen}
    >
      <div />
      <div />
      <div />
    </div>
  );
};

export default HamburgerMenu;

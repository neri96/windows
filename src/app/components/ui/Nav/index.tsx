import Link from "next/link";

import styles from "./styles.module.scss";

import { navigationList } from "@/app/globalConst";

const Nav = ({
  additionalStyles,
}: {
  additionalStyles?: { [key: string]: string };
}) => {
  return (
    <nav style={additionalStyles || undefined} className={styles.nav}>
      <ul className={styles.navList}>
        {navigationList.map(({ id, page }: { id: string; page: string }) => {
          return (
            <li key={id}>
              <Link href={`/${page}`}>{page || "home"}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

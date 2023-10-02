"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import HamburgerMenu from "../HamburgerMenu";

import logo from "../../../assets/images/main-logo.png";

import styles from "./styles.module.scss";

import { navigationList } from "@/app/globalConst";

const navList = () => {
  return (
    <ul className={styles.navList}>
      {navigationList.map(({ id, page }: { id: string; page: string }) => {
        return (
          <li key={id}>
            <Link href={`/${page.replace(/\s+/g, "")}`}>{page || "home"}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const currentPath = pathname.replace(/^\/|\/$/g, "");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "scroll";
      };
    }
  }, []);

  return (
    <header className={`${styles.mainHeader} ${currentPath && styles.solid}`}>
      <Link href="/">
        <div className={styles.mainLogo}>
          <Image priority={true} src={logo} alt="Picture of the author" />
        </div>
      </Link>
      <div className={styles.mainHeader__navIcon}>
        <HamburgerMenu
          isOpen={isMenuOpen}
          handleOpen={() => setIsMenuOpen((isOpen) => !isOpen)}
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navigationList.map(({ id, page }: { id: string; page: string }) => {
            return (
              <li key={id}>
                <Link href={`/${page.replace(/\s+/g, "")}`}>
                  {page || "home"}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={{ hidden: { opacity: 0 }, open: { opacity: 1 } }}
            initial="hidden"
            animate="open"
            exit="hidden"
            className={styles.nav__backdrop}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              variants={{ hidden: { opacity: 0 }, open: { opacity: 1 } }}
              initial="hidden"
              animate="open"
              exit="hidden"
              transition={{ duration: 0.3 }}
              className={styles.nav__mobile}
            >
              <ul className={styles.navList}>
                {navigationList.map(
                  ({ id, page }: { id: string; page: string }, i: number) => {
                    return (
                      <motion.li
                        key={id}
                        variants={{
                          hidden: { opacity: 0 },
                          open: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate="open"
                        exit="hidden"
                        transition={{ delay: 0.1 + i / 10, duration: 0.3 }}
                      >
                        <Link href={`/${page.replace(/\s+/g, "")}`}>
                          {page || "home"}
                        </Link>
                      </motion.li>
                    );
                  }
                )}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

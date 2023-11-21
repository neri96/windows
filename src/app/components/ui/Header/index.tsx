"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import classnames from "classnames";

import useCurrentPath from "@/app/hooks/useCurrentPath";

import HamburgerMenu from "../HamburgerMenu";

import logo from "../../../assets/images/main-logo2.png";

import styles from "./styles.module.scss";

import { navigationList } from "@/app/globalConst";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const router = useRouter();

  const currentPath = useCurrentPath();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "scroll";
      };
    }
  }, [isMenuOpen]);

  return (
    <header
      className={classnames(styles.mainHeader, {
        [styles.solid]: currentPath,
        [styles.fixed]: currentPath === "ourwork",
      })}
    >
      <div
        onClick={() => router.push("/", { scroll: false })}
        className={styles.mainLogo}
      >
        <Image priority={true} src={logo} alt="Main" />
      </div>
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

"use client";

import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";

import { v4 as uuid } from "uuid";

import Image from "next/image";

import PageSection from "@/app/components/ui/PageSection";
import ServiceBubble from "./ServiceBubble";

import styles from "./styles.module.scss";

import WindowImg from "@/app/assets/images/home/window.jpg";
import DoorImg from "@/app/assets/images/home/door.jpg";

import StarIcon from "@/app/assets/images/icons/star.svg";
import ArrowIcon from "@/app/assets/images/icons/select-arrow.svg";

import bg from "@/app/assets/images/home/services-bg.webp";

import { ServiceOption } from "./types";

const addedStyles = {
  height: "100vh",
  minHeight: "800px",
  width: "100%",
  backgroundImage: `url(${bg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const windowInstallationTypes = [
  { id: uuid(), service: "bay windows" },
  { id: uuid(), service: "garden windows" },
  { id: uuid(), service: "single hung windows" },
  { id: uuid(), service: "double hung windows" },
  { id: uuid(), service: "casement windows" },
  { id: uuid(), service: "awning windows" },
  { id: uuid(), service: "slider windows" },
  { id: uuid(), service: "picture windows" },
];

const doorInstallationTypes = [
  { id: uuid(), service: "patio doors" },
  { id: uuid(), service: "entry doors" },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = () => {
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const [chosenOption, setChosenOption] = useState(ServiceOption.Window);
  const [serviceList, setServiceList] = useState(
    ServiceOption.Window ? windowInstallationTypes : doorInstallationTypes
  );

  const handleOptions = (option: ServiceOption) =>
    chosenOption !== option && setChosenOption(option);

  useEffect(() => {
    setServiceList(
      chosenOption === ServiceOption.Window
        ? [...windowInstallationTypes]
        : [...doorInstallationTypes]
    );
  }, [chosenOption]);

  return (
    <PageSection ref={sectionRef} title="What We Do" style={addedStyles}>
      <div className={styles.service__arrow} onClick={scrollToSection}>
        <Image priority={true} src={ArrowIcon} alt="Email" />
      </div>
      <div className={styles.services__body}>
        <div className={styles.services__list}>
          <ul>
            {serviceList.map(
              ({ id, service }: { id: string; service: string }, i: number) => {
                return (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    <div className={styles.services__img}>
                      <Image priority={true} src={StarIcon} alt="Service" />
                    </div>
                    <div className={styles.services__name}>
                      <h4>{service}</h4>
                    </div>
                  </motion.li>
                );
              }
            )}
          </ul>
        </div>
        <div className={styles.services__options}>
          <ServiceBubble
            isCurrentOption={chosenOption === ServiceOption.Window}
            handleClick={() => handleOptions(ServiceOption.Window)}
          >
            <Image priority={true} src={WindowImg} alt="Window Service" />
            <span>Windows</span>
          </ServiceBubble>

          <ServiceBubble
            isCurrentOption={chosenOption === ServiceOption.Door}
            handleClick={() => handleOptions(ServiceOption.Door)}
          >
            <Image priority={true} src={DoorImg} alt="Door Service" />
            <span>Doors</span>
          </ServiceBubble>
        </div>
      </div>
    </PageSection>
  );
};

export default Services;

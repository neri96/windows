"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Image, { StaticImageData } from "next/image";

import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";

import styles from "./styles.module.scss";

import { matData } from "../constants";

import ZoomIcon from "@/app/assets/images/icons/search-svgrepo-com.svg";

const initalState = {
  title: "",
  description: "",
};

export const MaterialsContainer = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<{
    title: string;
    description: string;
  }>(initalState);

  const openModal = (title: string, description: string) => {
    setCurrentOption({ ...currentOption, title, description });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentOption({ ...currentOption, ...initalState });
  };

  return (
    <>
      <div className={styles.materials}>
        <div className={styles.materials__options}>
          {matData.map(
            ({
              id,
              img,
              title,
              description,
            }: {
              id: string;
              img: StaticImageData;
              title: string;
              description: string;
            }) => {
              return (
                <div key={id} className={styles.material__option}>
                  <div className={styles.material__img}>
                    <Image priority={true} src={img} alt={title} />
                  </div>
                  <div className={styles.material__title}>
                    <h3>{title}</h3>
                  </div>
                  <div className={styles.material__descr}>
                    <p>{description}</p>
                  </div>
                  <div className={styles.material__more}>
                    <Button handleClick={() => openModal(title, description)}>
                      <Image src={ZoomIcon} alt={"Read more"} />
                    </Button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <Modal closeModal={closeModal} btnTitle="Close">
            <div className={styles.material__modal}>
              <div className={styles.material__modal__title}>
                <h2>{currentOption.title}</h2>
              </div>
              <div className={styles.material__modal__descr}>
                {currentOption.description}
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

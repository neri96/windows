"use client";

import { useState } from "react";

import Image, { StaticImageData } from "next/image";

import OurWorkCarousel from "./OurWorkCarousel";

import { images } from "../images";

import styles from "./OurWorkGallery.module.scss";
import { AnimatePresence } from "framer-motion";

export const OurWorkGallery = () => {
  const [index, setIndex] = useState<number>(0);
  const [carouselOpen, setCarouselOpen] = useState<boolean>(false);

  return (
    <div className={styles.ourWorkGallery}>
      <OurWorkCarousel
        index={index}
        images={images}
        carouselOpen={carouselOpen}
        setIndex={setIndex}
        setCarouselOpen={setCarouselOpen}
      />
      <div className={styles.ourWorkGallery__content}>
        {images.map(
          (
            {
              id,
              img,
              title,
            }: { id: string; img: StaticImageData; title: string },
            i: number
          ) => {
            return (
              <Image
                key={id}
                onClick={() => {
                  setIndex(i);
                  setCarouselOpen(true);
                }}
                // placeholder="blur"
                src={img}
                alt={title}
                layout="responsive"
                loading="lazy"
              />
            );
          }
        )}
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";

import Image from "next/image";

import OurWorkCarousel from "./OurWorkCarousel";

import { images } from "../images";

import styles from "./OurWorkGallery.module.scss";

export const OurWorkGallery = () => {
  const [index, setIndex] = useState<number>(0);
  const [carouselOpen, setCarouselOpen] = useState<boolean>(false);

  return (
    <div className={styles.ourWorkGallery}>
      <OurWorkCarousel
        index={index}
        setIndex={setIndex}
        carouselOpen={carouselOpen}
        setCarouselOpen={setCarouselOpen}
      />
      <div className={styles.ourWorkGallery__content}>
        {images.map(({ id, img }: any, i: number) => {
          return (
            <Image
              key={id}
              onClick={() => {
                setIndex(i);
                setCarouselOpen(true);
              }}
              priority={true}
              src={img}
              alt="Picture of the author"
            />
          );
        })}
      </div>
    </div>
  );
};

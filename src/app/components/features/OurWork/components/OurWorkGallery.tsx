"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import Image, { StaticImageData } from "next/image";

import OurWorkCarousel from "./OurWorkCarousel";

import { images } from "../images";

import styles from "./OurWorkGallery.module.scss";

export const OurWorkGallery = () => {
  const [index, setIndex] = useState<number>(0);
  const [carouselOpen, setCarouselOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className={styles.ourWorkGallery}>
      {mounted
        ? createPortal(
            <OurWorkCarousel
              index={index}
              images={images}
              carouselOpen={carouselOpen}
              setIndex={setIndex}
              setCarouselOpen={setCarouselOpen}
            />,
            document.body
          )
        : null}
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

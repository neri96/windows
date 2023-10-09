import { Dispatch, SetStateAction } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Image, { StaticImageData } from "next/image";

import OurWorkPagination from "./OurWorkPagination";

import { images } from "../images";

import CloseIcon from "../../../../assets/images/icons/close.svg";
import ArrowIcon from "../../../../assets/images/icons/arrow.svg";

import styles from "./OurWorkCarousel.module.scss";

const carouselWidth = 100 * images.length;

const OurWorkCarousel = ({
  index,
  setIndex,
  carouselOpen,
  setCarouselOpen,
}: {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  setCarouselOpen: Dispatch<SetStateAction<boolean>>;
  carouselOpen: boolean;
}) => {
  const handleIndexMinus = () => {
    if (index === 0) return;

    setIndex((i: number) => --i);
  };

  const handleIndexPlus = () => {
    if (index === images.length - 1) return;

    setIndex((i: number) => ++i);
  };

  return (
    <AnimatePresence>
      {carouselOpen && (
        <motion.div
          className={styles.ourWorkGallery__backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.ourWorkGallery__carousel}>
            <div
              className={styles.ourWorkGallery__close}
              onClick={() => setCarouselOpen(false)}
            >
              <Image priority={true} src={CloseIcon} alt="Close" />
            </div>
            {index !== 0 ? (
              <div
                className={styles.ourWorkGallery__controllerLeft}
                onClick={handleIndexMinus}
              >
                <Image priority={true} src={ArrowIcon} alt="Left" />
              </div>
            ) : null}
            {index !== images.length - 1 ? (
              <div
                className={styles.ourWorkGallery__controllerRight}
                onClick={handleIndexPlus}
              >
                <Image priority={true} src={ArrowIcon} alt="Right" />
              </div>
            ) : null}
            <div
              className={styles.ourWorkGallery__carousel__content}
              style={{
                width: `${carouselWidth}%`,
                transform: `translateX(-${(100 / images.length) * index}%)`,
              }}
            >
              {images.map(
                ({
                  id,
                  title,
                  img,
                }: {
                  id: string;
                  title: string;
                  img: StaticImageData;
                }) => {
                  return (
                    <div
                      key={id}
                      className={styles.ourWorkGallery__carousel__imgWrap}
                    >
                      <h2>{title}</h2>
                      <Image
                        className={styles.ourWorkGallery__carousel__img}
                        priority={true}
                        src={img}
                        alt={title}
                      />
                    </div>
                  );
                }
              )}
            </div>
            <OurWorkPagination currentIndex={index} setIndex={setIndex} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OurWorkCarousel;

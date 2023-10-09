import { useState, useEffect, Dispatch, SetStateAction } from "react";

import { v4 as uuid } from "uuid";
import classnames from "classnames";

import Image from "next/image";

import { images } from "../images";

import styles from "./OurWorkPagination.module.scss";

const OurWorkPagination = ({
  currentIndex,
  setIndex,
}: {
  currentIndex: number;
  setIndex: Dispatch<SetStateAction<number>>;
}) => {
  const [imgPerPage, setImgPerPage] = useState<number>(7);

  useEffect(() => {
    const displayMobile = () => {
      if (window.innerWidth < 600) {
        setImgPerPage(4);
      }
    };

    displayMobile();

    // !!! In case browser window is resized after app is rendered

    const handleResize = () => {
      displayMobile();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // !!!
  }, []);

  return (
    <div className={styles.ourWorkGallery__pagination}>
      <div
        style={{ width: 85 * imgPerPage + "px" }}
        className={styles.ourWorkGallery__pagination__content}
      >
        <div
          style={{
            width: `${images.length} * 85px`,
            transform:
              images.length - currentIndex > imgPerPage
                ? `translateX(-${85 * currentIndex - 85}px)`
                : `translateX(-${85 * (images.length - imgPerPage)}px)`,
          }}
          className={styles.ourWorkGallery__pagination__wrap}
        >
          {images.map(({ img }: any, i: number) => {
            return (
              <Image
                onClick={() => setIndex(i)}
                className={classnames({
                  [styles.ourWorkGallery__pagination__currentImg]:
                    i === currentIndex,
                })}
                key={uuid()}
                priority={true}
                src={img}
                alt="Picture of the author"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default OurWorkPagination;

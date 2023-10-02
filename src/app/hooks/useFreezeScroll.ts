import { useEffect } from "react";

const useFreezeScroll = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
};

export default useFreezeScroll;

import { Montserrat, Caprasimo } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
});

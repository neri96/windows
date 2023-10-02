import { v4 as uuid } from "uuid";

import vinylImg from "@/app/assets/images/materials/vinyl.jpg";
import fiberglassImg from "@/app/assets/images/materials/fiberglass.jpg";
import aluminiumImg from "@/app/assets/images/materials/aluminium.jpg";
import woodImg from "@/app/assets/images/materials/wood.jpg";

export const matData = [
  {
    id: uuid(),
    img: vinylImg,
    title: "Vinyl",
    description:
      "Vinyl windows are designed to be energy efficient, keeping your home or business warm in the winter and cool in the summer. They feature double-paned glass, which provides excellent insulation against heat and cold. This means that you can enjoy lower energy bills and a more comfortable indoor climate. Vinyl windows require very little maintenance. They have a smooth, easy-to-clean surface that resists dirt and grime, so you won't need to spend hours scrubbing away at them. And because they don't require painting or staining, you'll save money on maintenance costs over time. While vinyl windows may not offer the same level of customization as other materials, they still come in a wide range of styles and colors. From classic casement windows to modern sliding windows, there's sure to be a style that suits your taste and needs. Plus, with a variety of color options available, you can choose the perfect match for your home's exterior.",
  },
  {
    id: uuid(),
    img: fiberglassImg,
    title: "Fiberglass",
    description:
      "Fiberglass windows and doors are made from a strong, durable material that can withstand harsh weather conditions and heavy use. They won't rot, rust, or fade like other materials, ensuring that they remain looking great for years to come. Fiberglass windows and doors come in a wide variety of styles and colors, allowing you to choose the perfect option to match your home's aesthetic. Whether you prefer a modern, sleek look or a classic, traditional design, we have the perfect solution for you. Upgrading to fiberglass windows and doors is a wise investment that can improve your home's comfort, appearance, and energy efficiency.",
  },
  {
    id: uuid(),
    img: aluminiumImg,
    title: "Aluminium",
    description:
      "Our aluminum windows and doors are engineered to provide unparalleled insulation, keeping your home warm during winter months and cool during summer. This means lower energy bills and reduced carbon footprint. Crafted from high-strength aluminum, our windows and doors are built to last. They won't warp, crack, or corrode over time, ensuring that your investment will endure for decades to come. With a vast array of styles, colors, and configurations available, you'll have no trouble finding the perfect match for your home's aesthetic. From sleek and modern to classic and traditional, we've got you covered.",
  },
  {
    id: uuid(),
    img: woodImg,
    title: "Wood",
    description:
      "There are many benefits to choosing wooden windows and doors for your home. Not only do they add an element of warmth and coziness, but they also offer superior energy efficiency, reducing your heating and cooling costs. Plus, they're incredibly durable and can last for decades with proper maintenance. But what really sets our wooden windows and doors apart is their ability to enhance your home's curb appeal. Imagine the beautiful, rich sound of solid wood doors opening and closing, or the warm, inviting glow of natural light filtering through handcrafted wooden window panes. It's these little details that make a big impact on your home's overall aesthetic and ambiance.",
  },
];

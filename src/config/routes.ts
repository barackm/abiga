import { FaHeart, FaPen, FaImages, FaHome } from "react-icons/fa";

export const mainNavLinks = [
  {
    href: "/",
    icon: FaHome,
    label: "Acceuil",
  },
  {
    href: "/about",
    icon: FaHeart,
    label: "Biographie",
  },
  {
    href: "/tributes",
    icon: FaPen,
    label: "Témoignages",
  },
  {
    href: "/photos",
    icon: FaImages,
    label: "Photos",
  },
] as const;

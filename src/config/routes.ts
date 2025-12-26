import { FaHeart, FaPen, FaImages, FaHome, FaUsers, FaMusic, FaFlower } from "react-icons/fa";

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
    href: "/family-moments",
    icon: FaUsers,
    label: "Moments en Famille",
  },
  {
    href: "/ejo",
    icon: FaMusic,
    label: "EJO",
  },
  {
    href: "/tributes",
    icon: FaPen,
    label: "Témoignages",
  },
  {
    href: "/funeral",
    icon: FaFlower,
    label: "Funérailles",
  },
  {
    href: "/photos",
    icon: FaImages,
    label: "Photos",
  },
] as const;

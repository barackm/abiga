export interface Testimonial {
  id: string;
  text: string;
  author: string;
  relation: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "Abigaël était une source de joie constante. Son sourire illuminait chaque pièce qu'elle traversait. Elle nous manquera profondément.",
    author: "Marie Kashala",
    relation: "Tante",
    image: "/images/caleb.jpg",
  },
  {
    id: "2",
    text: "Je me souviendrai toujours de nos moments de rire et de jeu ensemble. Sa gentillesse et son esprit vif étaient remarquables.",
    author: "Patrick Mumbala",
    relation: "Cousin",
    image: "/images/caleb.jpg",
  },
  {
    id: "3",
    text: "Une âme pure et bienveillante qui a touché tant de vies en si peu de temps. Son souvenir restera à jamais gravé dans nos cœurs.",
    author: "Sarah Kabongo",
    relation: "Amie de famille",
    image: "/images/caleb.jpg",
  },
];

import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import vigiSystemsImage from "@/public/images/reviews/VigiSystems.png";
import GADRImage from "@/public/images/reviews/GADR.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Robert Sach",
    designation: "Daglig leder i Vigi Systems",
    image: vigiSystemsImage,
    content:
      "Jeg kom til Paral Dynamic med behov for å utvikle en mobilapplikasjon, og deres faglige kompetanse gjorde dem til den perfekte partneren. De hjalp oss med å gå fra idé til ferdig produkt, og vi er svært fornøyd med resultatet.",
  },
  {
    id: 2,
    name: "Andreas Lien Madsen",
    designation: "CEO i GADR",
    image: GADRImage,
    content:
      "Paral er en behagelig og trygg samarbeidspartner. De har en evne til å forstå behovet ditt, og jeg tror det er derfor de klarer å produsere nøyaktig det du trenger. I tillegg er de en gjeng med veldig hyggelige mennesker",
  },
/*   {
    id: 3,
    name: "Devid Smith",
    designation: "Founter @democompany",
    image: image1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
  },
  {
    id: 4,
    name: "Jhon Abraham",
    designation: "Founter @democompany",
    image: image2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
  }, */
];

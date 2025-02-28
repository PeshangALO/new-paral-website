import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import vigiSystemsImage from "@/public/images/reviews/VigiSystems.png";
import GADRImage from "@/public/images/reviews/GADR.png";

import vigiLight from "@/public/images/brand/vigiSystems-coloured.svg"
import vigiDark from "@/public/images/brand/vigiSystems-coloured-dark.svg"
import GADRLight from "@/public/images/brand/GADR-coloured.svg"
import GADRDark from "@/public/images/brand/GADR-coloured-dark.svg"


/* import vigiSystems from "@public/images/brand/visiSystems-dark.svg" */

import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Robert Sach",
    designation: "Daglig leder",
    image: {
      light: vigiLight,
      dark: vigiDark
    },
    size: {
      width: 160,
      height: 70
    },
    content:
      "Jeg kom til Paral Dynamic med behov for å utvikle en mobilapplikasjon, og deres faglige kompetanse gjorde dem til den perfekte partneren. De hjalp oss med å gå fra idé til ferdig produkt, og vi er svært fornøyd med resultatet.",
  },
  {
    id: 2,
    name: "Andreas Lien Madsen",
    designation: "CEO",
    image: {
      light: GADRLight,
      dark: GADRDark,
    },
    size: {
      width: 100,
      height: 70
    },
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

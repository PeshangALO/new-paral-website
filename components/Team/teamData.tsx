import Alex from "@/public/images/team-images/Alex.png";
import Eline from "@/public/images/team-images/Eline.png";
import Lucas from "@/public/images/team-images/Lucas.png";
import Peshang from "@/public/images/team-images/Peshang.png";
import Rashed from "@/public/images/team-images/Rashed.png";
import Rasmus from "@/public/images/team-images/Rasmus.png";
import Tim from "@/public/images/team-images/Tim.png";
import Gunnar from "@/public/images/team-images/Gunnar1.png";




import { TeamMember } from "@/types/teamMember";

const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Peshang Alo",
      role: "AI Utvikler & CTO",
      bio: "Peshang har bakgrunn med utvikling av AI. Skriver litt ekstra for å teste skalering når det er mye tekst.",
      image: Peshang,
      social: {
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      name: "Rune Alexander Laursen",
      role: "AI Utvikler & CEO",
      bio: "Rune Alexander elsker AI.",
      image: Alex,
      social: {
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Rasmus Nicolay Pripp",
      role: "CFO",
      bio: "Holder pengene i sjakk.",
      image: Rasmus,
      social: {
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4, 
      name: "Rashed Rajab",
      role: "Utivkler & Prosjekt Manager",
      bio: "Han kan programmere.",
      image: Rashed,
      social: {
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 6, 
      name: "Eline Grønlid",
      role: "Markedsføring",
      bio: "Eline markedsfører oss på sosiale medier. Skriver en hel masse for å se hvordan høyden forandrer seg hvis det er flere linjer med tekst.",
      image: Eline,
      social: {
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 7, 
      name: "Tim-Eric Reichert",
      role: "UX Designer",
      bio: "Kan lage noen designs her og der.",
      image: Tim,
      social: {
        linkedin: "https://linkedin.com",
      },
    },
/*         {
      id: 8, 
      name: "Lucas T. Hagfoss",
      role: "Frontend Utvikler",
      bio: "En sabla god salgsmann.",
      image: Lucas,
      social: {
        linkedin: "https://linkedin.com",
      },
    }, */
    {
      id: 8, 
      name: "Gunnar Skare",
      role: "Salg & Markedsføring",
      bio: "En sabla god salgsmann.",
      image: Gunnar,
      social: {
        linkedin: "https://linkedin.com",
      },
    },
  ]
  

export default teamMembers;
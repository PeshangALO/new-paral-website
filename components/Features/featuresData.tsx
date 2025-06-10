import { Feature } from "@/types/feature";
import { Smartphone, Bot, Users, MonitorCog } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-06.svg",
    title: "KI / AI",
    information:
      "Fra data til verdi: Skreddersydde KI-algoritmer som bruker din data til å skape målbar forretningsvekst.",
    lucideIcon: Bot
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Apputvikling",
    information:
      "Skap vekst med en app som løser dine behov, fra konsept til lansert løsning med fokus på brukervennlighet.",
    lucideIcon: Smartphone
  },  
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "Systemutvikling",
    information:
      "Integrerte systemer og fleksible dashboards som gir sanntidsinnsikt og strømlinjeformer arbeidsflyt.",
    lucideIcon: MonitorCog
    },

];

export default featuresData;

import { Feature } from "@/types/feature";
import { Smartphone, Bot, Users, PanelTop } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-06.svg",
    title: "KI / AI",
    information:
      "Vi hjelper bedrifter med å utnytte kunstig intelligens (AI).",
    lucideIcon: Bot
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "App-utvikling",
    information:
      "Vi lager kundetilpassede apper og systemer for bedrifter.",
    lucideIcon: Smartphone
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "IT-rådgiving",
    information:
      "Med bred erfaring hjelper vi deg å velge de beste IT-løsningene.",
    lucideIcon: Users
    },
  
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "Web-utvikling",
    information:
      "Moderne og responsive nettsider tilpasset dine behov.",
    lucideIcon: PanelTop
    },

];

export default featuresData;

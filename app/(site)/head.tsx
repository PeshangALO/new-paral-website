import { getAssetPath } from "@/utils/assets";

export default function Head() {
  return (
    <head>
      <title> Paral Dynamic | Spesialister på digitalisering, AI og andre digitale tjenester!</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description " content="Paral Dynamic utvikler løsninger spesialtilpasset din virksomhet, for å optimalisere arbeidsprosesser, øke effektiviteten og nå dine mål. Vi er her for å bygge programvaren som gjør en forskjell for deg!"/>
<link 
      rel="icon" 
      href={getAssetPath("/images/favicon.ico")}
      type="image/x-icon"
      />
    </head>
  );
}



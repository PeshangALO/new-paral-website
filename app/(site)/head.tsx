import { getAssetPath } from "@/utils/assets";

export default function Head() {
  return (
    <head>
      <title> Paral Dynamic | Spesialister på digitalisering, AI og andre digitale tjenester!</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description " content="Paral Dynamic utvikler løsninger spesialtilpasset din virksomhet, for å optimalisere arbeidsprosesser, øke effektiviteten og nå dine mål. Vi er her for å bygge programvaren som gjør en forskjell for deg!"/>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17149594181"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17149594181');
          gtag('event', 'conversion', {
            'send_to': 'AW-17149594181/Ye6GCIv3kNMaEMWUyPE_',
            'value': 1.0,
            'currency': 'NOK'
          });
        `
      }} />
<link 
      rel="icon" 
      href={getAssetPath("/images/favicon.ico")}
      type="image/x-icon"
      />
    </head>
  );
}



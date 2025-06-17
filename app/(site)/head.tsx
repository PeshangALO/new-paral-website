import { getAssetPath } from "@/utils/assets";

export default function Head() {
  return (
    <head>
      <title> Paral Dynamic | Spesialister på digitalisering, AI og andre digitale tjenester!</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description " content="Paral Dynamic utvikler løsninger spesialtilpasset din virksomhet, for å optimalisere arbeidsprosesser, øke effektiviteten og nå dine mål. Vi er her for å bygge programvaren som gjør en forskjell for deg!" />
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
      {/* LinkedIn Insight Tag */}
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          _linkedin_partner_id = "8490433";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `
      }}></script>
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          (function(){
            if(!window.lintrk){
              window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            }
            window.lintrk.q = window.lintrk.q || [];
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })();
        `
      }}></script>
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }} alt="" src="https://px.ads.linkedin.com/collect/?pid=8490433&fmt=gif" />
      </noscript>
      <link
        rel="icon"
        href={getAssetPath("/images/favicon.ico")}
        type="image/x-icon"
      />
    </head>
  );
}



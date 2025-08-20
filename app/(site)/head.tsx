import { getAssetPath } from "@/utils/assets";

export default function Head() {
  return (
    <head>
      <title> Paral Dynamic | Spesialister på digitalisering, AI og andre digitale tjenester!</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description " content="Paral Dynamic utvikler løsninger spesialtilpasset din virksomhet, for å optimalisere arbeidsprosesser, øke effektiviteten og nå dine mål. Vi er her for å bygge programvaren som gjør en forskjell for deg!" />
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P6993HGX');
        `
      }} />
      {/* End Google Tag Manager */}
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
        href={getAssetPath("/favicon.ico")}
        type="image/x-icon"
      />
    </head>
  );
}



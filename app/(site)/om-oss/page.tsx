import Image from "next/image";
import { Metadata } from "next";
import { getAssetPath } from "@/utils/assets"; // Optional: if you have team images or assets here
import SectionHeader from "@/components/Common/SectionHeader";

import SingleTeamMember from "@/components/Team/singleTeamMember";
import TeamMembers from "@/components/Team/teamData";
import TeamSection from "@/components/Team";

export const metadata: Metadata = {
    title: "Paral Dynamic | Om Oss",
    description: "Lær mer om teamet bak Paral Dynamic",
};

export default function OmOssPage() {
    return (
        <>
        <div className="mt-[10rem] mx-3 pb-10">
          <SectionHeader
                    headerInfo={{
                      title: "",
                      subtitle: "Om oss",
                      description: " Paral er et lite, kompetent og fleksibelt utviklingsteam med base i Kristiansand. Vi kombinerer teknologisk innsikt, brukerfokus og godt samarbeid for å levere løsninger som faktisk fungerer.",
                      fontSize: "text-4xl"
                    }}
                  />        
        </div>
      
<div>
                    <h2 className="text-3xl font-semibold text-black dark:text-white mt-6">
                        Historien vår
                    </h2>
                    <p className="mt-4 text-gray-300">
                        Paral ble startet med et ønske om å gjøre teknologi mer tiligjengelig og meningsfull. 
                    </p>
                    <p className="mt-4 text-gray-300">
                        Vi bygger digitale løsniner som gjør hverdagen enklere - i helse, industri, energi og mer. 
                    </p>
                    <h3 className="text-2xl font-semibold text-black dark:text-white mt-8">
                        Visjon og verdier
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Å skape verdi gjennom innovasjon og engasjement ...
                    </p>

                    <h3 className="text-2xl font-semibold text-black dark:text-white mt-8">
                        Team og kompetanse
                    </h3>
                    <TeamSection></TeamSection>
</div>
</>
    );
}

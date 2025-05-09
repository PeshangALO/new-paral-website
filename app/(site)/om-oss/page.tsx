
import Image from "next/image";

import { motion } from "framer-motion";
import { Metadata } from "next";
import { getAssetPath } from "@/utils/assets"; // Optional: if you have team images or assets here
import SectionHeader from "@/components/Common/SectionHeader";

import SingleTeamMember from "@/components/Team/singleTeamMember";
import TeamMembers from "@/components/Team/teamData";
import TeamSection from "@/components/Team";

import ValuesSection from "@/components/values";
import HistorySection from "./historie";

export const metadata: Metadata = {
    title: "Paral Dynamic | Om Oss",
    description: "Lær mer om teamet bak Paral Dynamic",
};

export default function OmOssPage() {
    return (
        <section className="flex flex-col gap-20">
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
        <div className="flex justify-center flex-col items-center gap-20">

                    <HistorySection/>

                    <ValuesSection/>

                    <TeamSection/>
            </div>
</section>
    );
}

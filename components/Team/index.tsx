"use client";

import SingleTeamMember from "./singleTeamMember";
import teamMembers from "./teamData";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <>
      <section className="mx-auto w-4/5 py-12 md:py-24">
        <div className="text-center mb-12 md:mb-20">
          <SectionHeader 
            headerInfo={{
              title: "MØT VÅRT TEAM",
              subtitle: "Møt vårt team",
              description: "Vi er et tverrfaglig team, bestående av utviklere, designere og tekniske rådgivere."
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
          {teamMembers.map((member) => (
            <SingleTeamMember teamMember={member} key={member.id}/>
          ))}
        </div>
    </section>
    </>
  );
}
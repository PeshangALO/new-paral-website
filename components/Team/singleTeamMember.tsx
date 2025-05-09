"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { TeamMember } from "@/types/teamMember";

const SingleTeamMember = ({ teamMember }: { teamMember: TeamMember }) => {
  const { name, role, image, social } = teamMember;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="border dark:border-strokedark dark:bg-blacksection bg-white rounded-xl shadow-md w-full max-w-xs overflow-hidden"
    >
      <div className="w-full relative overflow-hidden h-96">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={384}
            height={384}
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl font-semibold text-gray-500">
            {name}
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>

          {social?.linkedin && (
            <Link
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className=" dark:hover:text-white text-gray-500 hover:text-black transition"
            >
              <FaLinkedin className="text-xl" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SingleTeamMember;

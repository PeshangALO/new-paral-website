import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt oss skjema",

  // other metadata
  description: "Dette er en side der du kontakte kontakte oss. Vi vil gjerne høre fra deg!"
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;

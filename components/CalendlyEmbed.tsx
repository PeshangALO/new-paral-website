"use client";
import React, { useEffect } from "react";

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="tidycal-embed" data-path="gunnar2/30-minute-meeting"></div>
  );
};

export default CalendlyEmbed;

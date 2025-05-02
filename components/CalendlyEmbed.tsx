// filepath: /Users/peshangalo/new-paral-website/app/(site)/components/CalendlyEmbed.tsx
"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyEmbed = () => {
  return (
    <div style={{ height: "700px" }}>
      <InlineWidget url="https://calendly.com/peshang-paral/30min" />
    </div>
  );
};

export default CalendlyEmbed;
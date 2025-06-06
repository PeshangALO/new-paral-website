import { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
    title: "Book et møte | Paral Dynamic",
    description: "Book et møte med Paral Dynamic for å diskutere dine behov og hvordan vi kan hjelpe deg.",
};

export default function BookMotePage() {
    return (
        <section className="mt-[10rem] mx-3 pb-10">
            <SectionHeader
                headerInfo={{
                    title: "",
                    subtitle: "Book et møte",
                    description: "Velg en tid som passer deg for å diskutere dine behov.",
                    fontSize: "text-4xl"
                }}
            />
            <div id="calendly" >
                <CalendlyEmbed />
            </div>

        </section>
    );
} 
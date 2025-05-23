import SectionHeader from "@/components/Common/SectionHeader"
import { motion, useInView} from "framer-motion"
import { Metadata } from "next";
import ProjectPreview from "@/components/ProjectPreview/ProjectPreview";
import projectPreviewData from "@/components/ProjectPreview/ProjectPreviewData"

export const metadata: Metadata = {
    title: "Paral Dynamic | Portefølje",
    description: "Lær mer om tidligere prosjekt hos Paral Dynamic.",
};

function Portfolio() {
    return(
        <>
        <div className="mt-[10rem] mx-3 pb-10">
            <SectionHeader 
                headerInfo={{
                    title:"",
                    subtitle:"Portefølje",
                    description: "Våre tidligere prosjekt.",
                    fontSize: "text-4xl"
                }}
            />
        </div>
        <section className="justify-center">
        <div className="flex flex-col max-w-6xl mx-auto m-2  gap-25">
            {projectPreviewData.map((project, index) => (
                <div
                 key={project.id}
                 className={`flex mb-12 ${
                            index % 2 === 0 
                            ? 'justify-start' // Odd (first item is index 0)
                            : 'justify-end'   // Even
                        }`}
                >
            <ProjectPreview
                    projectPreviewInfo={project}
                    isEven={index % 2 !== 0}
                />
                </div>
                ))}
            </div>
        </section>
    </>
    )
}

export default Portfolio
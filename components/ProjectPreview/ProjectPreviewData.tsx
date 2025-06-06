import { ProjectPreviewProps } from "@/types/projectPreviewProps";


export const projectPreviewData: ProjectPreviewProps[] = [
    {
        id: 1,
        title: "GADR",
        description1: "GADR er en plattform som tillater boligeiere å kalkulere de beste energitiltakene på sin bolig.",
        description2: "Vi utviklet en AI-drevet plattform for energitiltak på bolig, som samler all nødvendig data og relevante aktører på ett sted.",
        featureList: [
"Adresseregistrering: Brukeren skriver inn en adresse på plattformen.",
"Automatisk henting av boligdata: Plattformen henter inn informasjon om boligen basert på adressen.",
"Tilleggsspørsmål: Brukeren svarer på noen ekstra spørsmål om boligen.",
"Energiberegning: Plattformen utfører beregninger for å foreslå energitiltak."
        ],
        dateInitiated: 2024,
        src: "/images/projectPreview/GADR-project-preview.png",
        companyLogo: "/images/brand/GADR-coloured.svg"
        
    },
        {
        id: 2,
        title: "Vigi Systems",
        height: 200,
        width: 200,
        description1: "Vigi Systems utvikler løsninger for feltarbeidere som jobber med det norske strømnettet, som stolpekontrollører og energimontører. Stolpekontrollørene jobber ofte langt ute i villmarken. Mobildekning er ofte fraværende." ,
        featureList: [
            "Vi lagde en full-stack løsning med mobilapplikasjon og dashboard. Både frontend og backend.",
            "Mobilapplikasjonen fungerer offline og synkroniserer data når nettverk er tilgjengelig igjen.",
            "Kartløsningen er optimalisert for bruk uten mobildekning."
        ],
        dateInitiated: 2024,
        src: "/images/projectPreview/Vigi_projectPreview.png",
        companyLogo: "/images/brand/vigiSystems-coloured.svg"
        
    },
        {
        id: 3,
        title: "Core Capacity",
        width: 50,
        height: 100,
        description1: "CoreCapacity AS jobber med prestasjonsfremmende trening for idrettsutøvere og ansatte, med fokus på kjernemuskulatur og kjernekapasitet.",
        description3: "Kommer snart!",
        description2: "Vi har laget en mobilapp og en webbasert plattform for opplasting av treningsvideoer og administrative funksjoner.",
        featureList: [
            "Vise treningsvideoer: En mobilapp hvor brukere kan se og følge treningsøkter.",
            "Samle inn data: Registrering og analysering av treningsdata fra brukerne.",
            "Opplastning av video: Et dashboard for å kunne laste opp nye videoer.",
            "Anbefalingsalgoritme: For å gi brukerne treningsvideoer basert på behov."
        ],
        dateInitiated: 2024,
        src: "/images/projectPreview/CoreCapacity_preview.png",
        companyLogo: "/images/brand/CoreCapacity_logo.png"
        
    }    
]


export default projectPreviewData
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import ScrambleText from "@/components/Srcamble-text"
import DraggableCardStack from "@/components/Card-Stack"


const PROJECTS = [
  {
    url: "https://eunoiaui.vercel.app",
    title: "Eunoia UI",
    description: "An experiemental laboratory for user interface.",
    year: "Design Engineer",
    tags: ["UI/UX", "React", "TypeScript"],

  },
  {
    url: "https://404-pages.framer.website",
    title: "The Lost Internet",
    description: "Interactive 404 pages to handle the code of vibe coders.",
    year: "UX/UI",
    tags: ["Design System", "React", "Storybook"],
  
  },
  {
    url: "https://fortunate-politician-605.notion.site/Art-in-Motion-Real-Time-crochet-pattern-visualisation-189ff90b3b6b8090a8d1f840b23fcadb",
    title: "Art in Motion",
    description: "The connection between traditional art and generative art.",
    year: "Generative Design",
    tags: ["Mobile", "React Native", "UI/UX"],
  
  },
    {
    url: "https://medium.com/@manyaagureja13/breathe-with-us-building-emotional-awareness-12c573257247",
    title: "Breathe With Us",
    description: "A Web Journey to Influence Managers and address Emotional Labor.",
    year: "UX/UI",
    tags: ["Mobile", "React Native", "UI/UX"],
  
  }
]
const cardData = [
  {
    id: "1",
    media: "/card2.mp4",
    mediaType: "image" as const,
    leftText: "Visual Story",
    rightText: "Motion Design",
  },
  {
    id: "2",
    media: "/card1.mp4",
    mediaType: "video" as const,
    leftText: "3D Types",
    rightText: "Generative Design",
  },
  {
    id: "3",
    media: "/card3.mp4",
    mediaType: "image" as const,
    leftText: "Patterns",
    rightText: "Generative Design",
  },
  {
    id: "4",
    media: "/card4.mp4",
    mediaType: "image" as const,
    leftText: "Moving Book Cover",
    rightText: "Generative Design",
  },

  
];

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="min-h-screen transition-colors duration-300">
        <Navigation />
         <div className="max-w-4xl mx-auto px-4">
        
        <main className="pb-24" role="main" id="main-content">
          {/* Header */}
          <section className="pt-52 pb-48" aria-labelledby="project-heading">
          <h1 id="project-heading" className="text-5xl lg:text-6xl font-light leading-tight mb-8 tracking-tight">
            Projects
            </h1>
          </section>

          {/* Projects */}
          <div className="space-y-12" role="list" aria-label="Project list">
          {PROJECTS.map((project) => (
            <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
              className="group block"
              aria-label={`View ${project.title} case study`}
            >
              <div
              className="grid grid-cols-[1fr_10rem] gap-x-8 items-baseline border-b border-white/10 px-2 py-4 
                        transition-colors duration-200 group-hover:bg-gray-200 rounded-xl"
              role="listitem"
            >
                <div className="px-4 py-4 flex flex-wrap gap-4 max-w-4xl">
                  <span className="font-bold">
                  <ScrambleText text={project.title} />
                  </span>
                  <span className="font-light" >
                  <ScrambleText text={project.description} />
                  </span>
                </div>

                <span className="text-gray-500 inline-block whitespace-nowrap">{project.year}</span>
              </div>
            </a>
          ))}
          </div>

          {/* Craft - Responsive Section */}
          <section className="card pt-52 pb-48" aria-labelledby="craft-heading">
          <h1 id="craft-heading" className="text-5xl lg:text-6xl font-light leading-tight mb-8 tracking-tight">
            Craft
            </h1>
            <div className="text-gray-800 w-full overflow-hidden">
              {/* Container with responsive scaling */}
              <div className="transform scale-50 sm:scale-75 md:scale-90 lg:scale-100 origin-center transition-transform duration-300">
                <DraggableCardStack cards={cardData} />
              </div>
            </div>
          </section>
        </main>
      </div>
      </div>
    </PageTransition>
  )
}
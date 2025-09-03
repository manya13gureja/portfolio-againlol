import { CollapsibleList } from "@/components/Collapsable-list";
import { Navigation } from "@/components/navigation";
import { PROJECTS } from "@/features/profile/data/project";
import { Panel, PanelHeader, PanelTitle } from "@/components/Panel";
import { ProjectItem } from "./project-item";
export default function Projects() {
  return (
    <>
    <Navigation />
    <div className="flex min-h-screen items-start justify-center px-16 py-52">
      
      <div className="w-full max-w-4xl">
        
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
    </div>
    </div>
    </>
  );
}
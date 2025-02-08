import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectData, projects, ProjectType } from "@/services/data";

const ProjectGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    projects.length > 0 ? projects[0] : null
  );

  // Group projects by type
  const projectsByType = projects.reduce((acc, project) => {
    if (!acc[project.project]) {
      acc[project.project] = [];
    }
    acc[project.project].push(project);
    return acc;
  }, {} as Record<ProjectType, ProjectData[]>);

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto rounded-lg bg-white bg-opacity-5 min-h-[600px]">
      {/* Sidebar for Project Selection */}
      <div className="w-full md:w-[30%] lg:w-[25%]  bg-white bg-opacity-5 shadow-md rounded-lg ">
        <ScrollArea className="w-full h-full">
          <div className="p-4">
            {Object.entries(projectsByType).map(([type, typeProjects]) => (
              <div key={type} className="mb-4">
                <h3 className="pb-1 mb-2 text-lg font-semibold border-b text-cyan-50">
                  {type} Projects
                </h3>
                {typeProjects.map((project) => (
                  <div
                    key={project.name}
                    onClick={() => setSelectedProject(project)}
                    className={`
                      cursor-pointer p-3 mb-2 rounded-lg transition-all duration-200
                      ${
                        selectedProject?.name === project.name
                          ? "bg-dark  text-white"
                          : "hover:bg-dark hover:text-white text-white"
                      }
                    `}
                  >
                    <h4 className="font-medium">{project.name}</h4>
                    <p className="text-sm text-gray-500 truncate">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Project View Area */}
      <div
        className={`
          w-full md:w-[70%] lg:w-[75%] p-4 flex flex-col 
          ${
            selectedProject?.project === ProjectType.Mobile ||
            selectedProject?.project === ProjectType.Work
              ? "items-center justify-center"
              : "items-start"
          }
        `}
      >
        {selectedProject && (
          <div
            className={`
              bg-white shadow-lg rounded-lg overflow-hidden
              ${
                selectedProject?.project === ProjectType.Mobile ||
                selectedProject?.project === ProjectType.Work
                  ? "w-[300px] max-w-[90%]"
                  : "w-full"
              }
            `}
          >
            <Carousel>
              <CarouselContent>
                {selectedProject.picture.map((picture, imageIndex) => (
                  <CarouselItem key={imageIndex}>
                    <div className="relative w-full ">
                      <img
                        src={picture}
                        alt={`${selectedProject.name} project image ${
                          imageIndex + 1
                        }`}
                        className={`
                          object-cover w-full h-full
                          ${
                            selectedProject?.project === ProjectType.Mobile ||
                            selectedProject?.project === ProjectType.Work
                              ? "object-contain"
                              : "object-cover"
                          }
                        `}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            <div className="p-4">
              <h2 className="mb-2 text-xl font-bold">{selectedProject.name}</h2>
              <p className="text-gray-700">{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;

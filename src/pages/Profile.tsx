import { useProfileStore } from "@/services/store";
import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "../services/store";
import React from "react";
import { Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import HorizontalTimeline from "@/components/custom/timeline";
import Biography from "./Biography";
import ProjectGallery from "@/components/custom/ProjectGallery";
import { Button } from "@/components/ui/button";

ChartJS.register(ArcElement, Tooltip, Legend);

export const knowledgeData: ChartData<"doughnut"> | undefined = {
  labels: ["Flutter", "React Native", "React Js", "Laravel", "Jetpack Compose"],
  datasets: [
    {
      label: "# of Votes",
      data: [40, 25, 20, 10, 5],
      backgroundColor: [
        "rgba(27, 217, 242, 0.2)",
        "rgba(122, 240, 255, 0.2)",
        "rgba(0, 137, 231, 0.2)",
        "rgba(219,0, 0, 0.2)",
        "rgba(57, 184, 79, 0.2)",
      ],
      borderColor: [
        "rgba(27, 217, 242, 1)",
        "rgba(122, 240, 255, 1)",
        "rgba(0, 137, 231, 1)",
        "rgba(219,0, 0, 1)",
        "rgba(57, 184, 79, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      labels: {
        color: "white",
        font: {
          // size: 14,
        },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          const dataset = context.dataset;
          const total = dataset.data.reduce(
            (sum: number, value: number) => sum + value,
            0
          );
          const currentValue = dataset.data[context.dataIndex];
          const percentage = ((currentValue / total) * 100).toFixed(2);
          return `${context.label}: ${percentage}%`;
        },
      },
    },
  },
};

const Profile = () => {
  const { profile, setProfile } = useProfileStore();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
    retry: 2,
  });

  const openPDF = (location: string) => {
    window.open(location, "_blank");
  };

  React.useEffect(() => {
    if (data) {
      setProfile(data);
    }
  }, [data, setProfile]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    return (
      <div className="text-red-500">
        <h2>Error loading profile</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-10">
      <div className="relative flex w-full min-h-[500px] gap-8 max-lg:flex-col-reverse overflow-x-hidden justify-between items-center">
        <div className="flex flex-col w-full space-y-4">
          {/* Heading Section */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold truncate sm:text-3xl lg:text-6xl text-card">
              Nice to meet you!
            </h1>
            <h1 className="text-2xl font-bold truncate sm:text-3xl lg:text-6xl text-card">
              I'm {profile?.name}.
            </h1>
            <div className="w-20 sm:w-[80%] lg:w-[90%] bg-white h-1 my-4" />
            <h1 className="text-2xl font-bold truncate sm:text-3xl lg:text-4xl text-card">
              I'm a {profile?.title}.
            </h1>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-[90%] rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col gap-6 p-6 lg:flex-row">
              <div className="w-full lg:w-1/2 h-[300px] flex items-center justify-center">
                <Doughnut data={knowledgeData} options={options} />
              </div>
              <div className="w-full space-y-3 text-center lg:w-1/2 lg:text-left">
                <p className="text-lg font-semibold bg-white ">
                  {profile?.title}
                </p>
                <p className="text-white text-md">{profile?.location}</p>
                <div className="space-y-2">
                  {profile?.education.map((e, index) => (
                    <p key={index} className="text-sm text-white md:text-base">
                      {e}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col display">
                  <Button
                    onClick={() => openPDF("./pdf/degree.pdf")}
                    className="lg:max-w-min"
                    variant="outline"
                  >
                    View Diploma Transcript
                  </Button>
                  <div className="mt-5"></div>
                  <Button
                    onClick={() => openPDF("./pdf/diploma.pdf")}
                    className="lg:max-w-min"
                    variant="outline"
                  >
                    View Degree Transcript
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <img
          className="w-[280px] h-[350px] md:w-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
          src={profile?.profileImage}
          alt="Profile"
        />
      </div>
      <HorizontalTimeline />
      <h1 className="p-6 mt-8 mb-6 text-4xl font-bold text-white md:text-5xl">
        My Personal Project, Client and Work
      </h1>
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="w-full">
            <Biography />
          </div>
          <div className="w-full">
            <ProjectGallery />
          </div>
        </div>
      </div>
      {/* <Biography /> */}

      {/* Knowledge Section */}
      {/* <div className="w-full p-6 mt-8 rounded-lg bg-dark">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          what do I do?
        </h1>
        <div className="flex flex-wrap justify-start gap-4">
          {profile?.knowledge.map((e, index) => (
            <p
              key={index}
              className="w-full sm:w-[45%] lg:w-[30%] p-4 text-cyan-50 text-center 
                       bg-opacity-20 bg-white rounded-lg 
                       text-sm md:text-base
                       transform transition-transform hover:scale-105"
            >
              {e}
            </p>
          ))}
        </div>
      </div> */}

      {/* <ProjectGallery /> */}

      {/* <div className="flex flex-wrap justify-center gap-2">
        {projects.map((project, i) => (
          <div key={i} className="w-full md:w-[30%]">
            <Carousel>
              <CarouselContent>
                {project.picture.map((picture, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full aspect-video">
                      <img
                        src={picture}
                        alt={`Project image ${index + 1}`}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Profile;

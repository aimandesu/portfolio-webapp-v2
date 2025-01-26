import React from "react";

interface StatProps {
  value: string | number;
  label: string;
}

const StatCard: React.FC<StatProps> = ({ value, label }) => (
  <div className="flex flex-col items-center p-4">
    <span className="text-4xl font-bold text-indigo-900">{value}</span>
    <span className="mt-2 text-center text-gray-600">{label}</span>
  </div>
);

interface BioData {
  name: string;
  email: string;
  age: number;
  location: string;
  stats: {
    experience: number;
    clients: number;
    projects: number;
    awards: number;
  };
}

const Biography: React.FC = () => {
  const bioData: BioData = {
    name: "Aiman Afiq",
    email: "aimanafiqbinesam@gmail.com",
    age: 24,
    location: "Cyberjaya, Sepang",
    stats: {
      experience: 1,
      clients: 6,
      projects: 10,
      awards: 25,
    },
  };

  return (
    <div className="p-4 mx-auto max-w-7xl md:p-8">
      <div className="overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="p-6 md:p-8">
            <h1 className="mb-6 text-4xl font-bold text-indigo-900 md:text-5xl">
              Biography
            </h1>

            <div className="mb-8 prose max-w-none">
              <p className="mb-4 text-gray-600">
                I am a mobile developer and web developer from Cyberjaya. I am
                proficient in Flutter, intermediate in React Js / React Native
                and Jetpack Compose and begginner in Laravel.
              </p>
              <p className="text-gray-600">
                Delivering work within time and budget which meets client's
                requirements is my motto.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-24 font-bold text-indigo-900">Name:</span>
                <span className="text-gray-600">{bioData.name}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-bold text-indigo-900">Email:</span>
                <span className="text-gray-600">{bioData.email}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-bold text-indigo-900">Age:</span>
                <span className="text-gray-600">{bioData.age}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-bold text-indigo-900">From:</span>
                <span className="text-gray-600">{bioData.location}</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center p-6 bg-gray-50 md:p-8">
            <div className="grid w-full grid-cols-2 gap-4">
              <StatCard
                value={bioData.stats.experience}
                label="Years of Experience"
              />
              <StatCard
                value={`${bioData.stats.clients}+`}
                label="Happy Clients"
              />
              <StatCard
                value={`${bioData.stats.projects}+`}
                label="Projects Completed"
              />
              {/* <StatCard value={bioData.stats.awards} label="Get Awards" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;

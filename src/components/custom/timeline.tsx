// TimelineEvent.tsx
import { LucideIcon } from "lucide-react";
import React from "react";
import { ArrowRight, ArrowDown, Book, BookOpen, Code } from "lucide-react";

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  icon: LucideIcon | string;
  isLast: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  date,
  title,
  description,
  icon,
  isLast,
}) => {
  // Check if icon is a string (image path) or LucideIcon
  const isImageIcon = typeof icon === "string";

  return (
    <div className="flex-1 relative min-w-[200px]">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-full">
          {isImageIcon ? (
            <img
              src={icon}
              alt={title}
              className="object-cover w-8 h-8 rounded-full"
            />
          ) : (
            icon &&
            React.createElement(icon as LucideIcon, { className: "w-6 h-6" })
          )}
        </div>
        <div className="text-center">
          <div className="text-sm text-white">{date}</div>
          <div className="mt-1 font-semibold text-white">{title}</div>
          <div className="mt-1 text-sm text-white">{description}</div>
        </div>
      </div>
      {!isLast && (
        <>
          <div className="absolute hidden -translate-x-1/2 lg:block top-6 left-full">
            <ArrowRight className="w-6 h-6 text-gray-400" />
          </div>
          <div className="absolute mt-2 -translate-x-1/2 md:hidden top-full left-1/2">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </>
      )}
    </div>
  );
};

interface Event {
  date: string;
  title: string;
  description: string;
  icon: LucideIcon | string;
}

const ResponsiveTimeline: React.FC = () => {
  const events: Event[] = [
    {
      date: "1 July 2019 - 1 March 2022",
      title: "UiTM Cawangan Kedah, Kampus Merbok",
      description: "Furthering education in Diploma of Computer Science",
      icon: Book,
    },
    {
      date: "13 March 2022 - 15 Jun 2024",
      title: "UiTM Cawangan Perak, Kampus Tapah",
      description: "Furthering education in Bachelor of Computer Science",
      icon: BookOpen,
    },
    {
      date: "11 March 2024 - 15 Jun 2024",
      title: "Internship Period",
      description:
        "Internship period as Flutter Mobile Developer at RF Laiyon Sdn Bhd",
      icon: Code,
    },
    {
      date: "1 July 2024 - Current",
      title: "First Job",
      description: "Flutter Mobile Developer at RF Laiyon Interactive",
      icon: Code,
    },
  ];

  return (
    <div className="w-full p-6">
      <div className="flex flex-col gap-8 lg:flex-row md:gap-4">
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            {...event}
            isLast={index === events.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveTimeline;

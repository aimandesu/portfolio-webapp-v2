import { create } from "zustand";
// import { useQuery } from "@tanstack/react-query";

// Types
type Profile = {
  name: string;
  profileImage: string;
  title: string;
  location: string;
  education: string[];
  knowledge: string[];
};

type ProfileStore = {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
};

// API function (example)
// export const fetchProfile = async (): Promise<Profile> => {
//   const response = await fetch('/api/profile');
//   return response.json();
// };

export const fetchProfile = async (): Promise<Profile> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // if (Math.random() < 0.3) {
  //   throw new Error("Failed to fetch profile data");
  // }

  return {
    name: "Aiman Afiq bin Esam",
    profileImage: "./Images/profile.jpeg",
    title: "Mobile & Web App Developer",
    location: "Cyberjaya",
    education: ["Diploma  | 3.55 CGPA ", "Bachelor | 3.37 CGPA"],
    knowledge: ["React Js", "React Native", "Flutter", "Jetpack Compose"],
  };
};

// Zustand store
export const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  isEditing: false,
  setIsEditing: (isEditing) => set({ isEditing }),
}));

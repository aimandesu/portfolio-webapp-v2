export enum ProjectType {
  Mobile = "Mobile",
  Web = "Web",
  Work = "Work",
}

export interface ProjectData {
  project: ProjectType;

  name?: string;
  picture: string[];
  description?: string;
}

export const projects: ProjectData[] = [
  {
    project: ProjectType.Mobile,
    name: "RF Infinite Assetsment",
    picture: [
      "./Images/Mobile/Contact/1.png",
      "./Images/Mobile/Contact/2.png",
      "./Images/Mobile/Contact/3.png",
      "./Images/Mobile/Contact/4.png",
      "./Images/Mobile/Contact/5.png",
      "./Images/Mobile/Contact/6.png",
      "./Images/Mobile/Contact/7.png",
      "./Images/Mobile/Contact/8.png",
      "./Images/Mobile/Contact/9.png",
      "./Images/Mobile/Contact/10.png",
    ],
  },
  {
    project: ProjectType.Mobile,
    name: "FYP Natural Hazard Mobile",
    picture: [
      "./Images/Mobile/natural_hazard_hub/1.png",
      "./Images/Mobile/natural_hazard_hub/2.png",
      "./Images/Mobile/natural_hazard_hub/3.png",
      "./Images/Mobile/natural_hazard_hub/4.png",
      "./Images/Mobile/natural_hazard_hub/5.png",
      "./Images/Mobile/natural_hazard_hub/6.png",
      "./Images/Mobile/natural_hazard_hub/7.png",
      "./Images/Mobile/natural_hazard_hub/8.png",
      "./Images/Mobile/natural_hazard_hub/9.png",
      "./Images/Mobile/natural_hazard_hub/10.png",
      "./Images/Mobile/natural_hazard_hub/11.png",
      "./Images/Mobile/natural_hazard_hub/12.png",
      "./Images/Mobile/natural_hazard_hub/13.png",
      "./Images/Mobile/natural_hazard_hub/14.png",
      "./Images/Mobile/natural_hazard_hub/15.png",
      "./Images/Mobile/natural_hazard_hub/16.png",
    ],
  },
  {
    project: ProjectType.Web,
    name: "FYP Natural Hazard Web",
    picture: [
      "./Images/Web/natural_hazard_hub/1.jpg",
      "./Images/Web/natural_hazard_hub/2.jpg",
      "./Images/Web/natural_hazard_hub/3.jpg",
      "./Images/Web/natural_hazard_hub/4.jpg",
      "./Images/Web/natural_hazard_hub/5.jpg",
      "./Images/Web/natural_hazard_hub/6.jpg",
    ],
  },
];

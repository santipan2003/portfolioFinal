import { User, InterestType, EducationType, ProjectType } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
  { id: 105, name: "Eve" },
  { id: 106, name: "Frank" },
];

export const InterestData: InterestType[] = [
  {
    id: 1,
    title: "Full-Stack Developer",
    image: "https://img2.pic.in.th/pic/developer_4661320.png",
  },

  {
    id: 2,
    title: "Software Developer",
    image: "https://img2.pic.in.th/pic/programing_2463510.png",
  },
  {
    id: 3,
    title: "Back-End Developer",
    image: "https://img2.pic.in.th/pic/programmer_1443116.png",
  },
  {
    id: 4,
    title: "Front-End Developer",
    image: "https://img5.pic.in.th/file/secure-sv1/end_13092224.png",
  },
  {
    id: 5,
    title: "Flutter Developer",
    image: "https://img2.pic.in.th/pic/experiments_3977702.png",
  },
];

export const EducationData: EducationType[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Engineering and Artificial Inteligence",
    title: "Walailak University , Tha-sala , Nakhon si Thammarat , Thailand ",
    gpax: "3.52",
    period: "2021 - 2025",
  },
  {
    id: 2,
    degree: "Science and Mathematics Program",
    title: "Phatthalung School , Phatthalung , Thailand",
    gpax: "3.25",
    period: "2015 - 2020",
  },
];

export const ProjectData: ProjectType[] = [
  {
    id: 1,
    title: "Dormitory Reservation System",
    subtitle: "Walailak University , Case Study",
    technologies: ["Next.js", "Supabase"],
    image: [
      "https://img5.pic.in.th/file/secure-sv1/re8.png",
      "https://img5.pic.in.th/file/secure-sv1/Re.png",
      "https://img5.pic.in.th/file/secure-sv1/re282ef685e5ac20f55.png",
      "https://img5.pic.in.th/file/secure-sv1/re3.png",
      "https://img2.pic.in.th/pic/re4.png",
      "https://img5.pic.in.th/file/secure-sv1/re5.png",
      "https://img2.pic.in.th/pic/re6.png",
    ],
  },
  {
    id: 1,
    title: "Phuket Tourist Attractions",
    subtitle: "Mini project , Back-End Developer",
    technologies: ["Next.js", "Supabase"],
    image: [
      "https://img5.pic.in.th/file/secure-sv1/ph11af44273c97bd446.png",
      "https://img2.pic.in.th/pic/ph2.png",
      "https://img5.pic.in.th/file/secure-sv1/ph3.png",
      "https://img2.pic.in.th/pic/ph4.png",
    ],
  },
];

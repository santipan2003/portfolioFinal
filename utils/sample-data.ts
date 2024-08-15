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
    video: [
      "/video/LandingPage.mp4",
      "/video/FirstLogin.mp4",
      "/video/Profile.mp4",
      "/video/DormitoryDetail.mp4",
      "/video/Building.mp4",
      "/video/Room.mp4",
      "/video/Bed.mp4",
      "/video/Approve.mp4",
      "/video/Form.mp4",
      "/video/AdminForm.mp4",
    ],
  },
];

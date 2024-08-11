// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type InterestType = {
  id: number;
  title: string;
  image: string;
};

export type EducationType = {
  id: number;
  degree: string;
  title: string;
  gpax: string;
  period: string;
};

export type ProjectType = {
  id: number;
  title: string;
  subtitle: string;
  technologies: string[];
  image: string[];
};

import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IPost {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  city: string;
  dateFound: string;
  status: string;
  isReported: boolean;
  reportCount: number;
  category: ICategory;
  user: IUser;
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface ICategory {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type TFounditemsElements = {
  title: string;
  category: { name: string };
  images: string[];
  location: string;
  city: string;
  dateFound: string;
  _id: string;
  user?: string;
  questions?: string[];
  description?: string;
};

export interface TDecodedUser {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: string;
  status: string;
  iat: number;
  exp: number;
}

export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  mobileNumber: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IInputs {
  required?: boolean;
  type?: string;
  name: string;
  label: string;
  className?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "md" | "sm" | "lg";
  disabled?: boolean;
}

export interface IAnswer {
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

export type TClaimRequest = {
  _id: string;
  item?: IPost;
  claimant: string | IClaimant;
  status: string;
  description: string;
  answers: IAnswer[];
  feedback: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface IClaimant {
  _id: string;
  name: string;
  role: "USER" | "ADMIN";
  email: string;
  status: "ACTIVE" | "INACTIVE";
  mobileNumber: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profilePhoto: string;
}

export interface IReceivedClaimRequest extends IPost {
  claimRequests: TClaimRequest[];
}
export interface IFeedbackStatus {
  feedback: string;
  status: string;
}

export interface ISearchResult {
  title: string;
  description: string;
  thumbnail: string;
  id: string;
}

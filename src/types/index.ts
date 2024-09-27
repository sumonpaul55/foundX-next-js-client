import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

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

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
};

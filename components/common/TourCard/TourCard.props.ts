import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface TourCardProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  id: string;
  title: string;
  text: string;
  href: string;
}

import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BtnLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
  href: string;
}

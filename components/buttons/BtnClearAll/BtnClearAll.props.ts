import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BtnClearAllProps
 extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

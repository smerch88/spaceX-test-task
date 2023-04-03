import { ReactNode } from 'react';

export interface ParagraphProps {
  variant?: 'dark' | 'white';
  className?: string;
  children: ReactNode;
}

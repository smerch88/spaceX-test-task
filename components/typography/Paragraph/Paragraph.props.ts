import { ReactNode } from 'react';

export interface ParagraphProps {
  className?: string;
  variant?: 'primary' | 'outlined';
  children: ReactNode;
}

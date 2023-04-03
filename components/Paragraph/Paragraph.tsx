import { FC } from 'react';
import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph: FC<ParagraphProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={cn('text-2xl font-light', className)} {...props}>
      {children}
    </p>
  );
};

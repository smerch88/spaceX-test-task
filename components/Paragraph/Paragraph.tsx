import { FC } from 'react';
import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph: FC<ParagraphProps> = ({
  variant = 'dark',
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'text-xl font-light',
        {
          ['text-dark']: variant == 'dark',
          ['text-white_light']: variant == 'white',
        },
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

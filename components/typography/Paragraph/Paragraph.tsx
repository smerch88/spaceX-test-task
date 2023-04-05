import { FC } from 'react';
import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph: FC<ParagraphProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <p
      className={cn('', className, {
        ['text-2xl font-light']: variant == 'primary',
        ['font-outline-2	text-[32px] font-semibold leading-[38px] text-white_light']:
          variant == 'outlined',
      })}
      {...props}
    >
      {children}
    </p>
  );
};

import cn from 'classnames';
import { TitleProps } from './Title.props';

export const Title = ({
  tag,
  variant = 'dark',
  children,
  className,
  content,
}: TitleProps): JSX.Element => {
  const Tag = tag ?? 'h2';

  return (
    <Tag
      className={cn('font-syne', className, {
        ['text-dark']: variant == 'dark',
        ['text-white_light']: variant == 'light',
        ['text-5xl']: tag == 'h1',
        ['text-[32px]']: tag == 'h2',
        ['text-2xl']: tag == 'h3',
      })}
      {...(content ? { dangerouslySetInnerHTML: { __html: content } } : {})}
    >
      {children}
    </Tag>
  );
};

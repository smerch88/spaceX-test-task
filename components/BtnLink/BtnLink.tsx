import cn from 'classnames';
import Link from 'next/link';
import { BtnLinkProps } from './BtnLink.props';

export const BtnLink = ({
  children,
  className,
  href,
  ...props
}: BtnLinkProps): JSX.Element => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={cn(
          'relative text-base	font-medium uppercase leading-[19px] text-white_light',
          'hover:after:absolute hover:after:left-0 hover:after:top-6 hover:after:h-[1px] hover:after:w-full hover:after:bg-white_light hover:after:content-[""]',

          className,
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

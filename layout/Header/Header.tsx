import cn from 'classnames';
import { HeaderProps } from './Header.props';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header
      {...props}
      className={
        '!bg-opacity-48 !fixed left-0 top-0 !z-[9999] flex w-full items-center !bg-dark/[.48] !transition'
      }
    >
      Header
    </header>
  );
};

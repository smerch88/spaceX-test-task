import cn from 'classnames';
import { HeaderProps } from './Header.props';
import { Button } from '@/components/buttons/Button';
import Link from 'next/link';
import Logo from '@/public/images/SpaceX-Logo.svg';
import { BtnLink } from '@/components/buttons/BtnLink';

const navItems = [
  { id: '1', name: 'home', link: '/' },
  { id: '2', name: 'tours', link: '#tours' },
  { id: '3', name: 'about', link: '#' },
  { id: '4', name: 'help', link: '#' },
];

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header
      {...props}
      className={
        '!bg-opacity-48 !fixed left-0 top-0 !z-[9999] flex w-full items-center !bg-dark/[.48] !transition'
      }
    >
      <div className="container">
        <div className="relative flex items-center justify-between py-3.5">
          <Link href={'/'}>
            <Logo width={229} height={42} className="m-0 object-fill p-0" />
          </Link>
          <nav className="flex w-full items-center justify-evenly">
            <ul className="flex gap-x-8">
              {navItems.map(({ id, name, link }) => (
                <li key={id}>
                  <BtnLink href={link}>{name}</BtnLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/favourites">
            <Button variant="heart" className="mr-6" />
          </Link>
          <Button variant="primary" header>
            sign in
          </Button>
        </div>
      </div>
    </header>
  );
};

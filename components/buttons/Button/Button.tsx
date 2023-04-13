import cn from 'classnames';
import { ButtonProps } from './Button.props';
import Heart from 'public/images/heart.svg';
import Trash from 'public/images/trash.svg';

export const Button = ({
  variant,
  header = false,
  children,
  className,
  like = false,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        'group flex w-full justify-center font-syne text-2xl font-semibold uppercase leading-[29px] text-very_dark duration-300 ease-in',
        className,
        {
          ['bg-button py-3 ']: variant == 'primary',
          [' max-w-[53px] bg-heart p-[14.5px] hover:bg-heart_hover hover:text-white']:
            variant == 'heart',
        },
        header && 'max-w-[163px]',
        like && 'bg-heart_hover text-white',
      )}
      {...props}
    >
      <span
        className={
          'group-hover:text-bold group-hover:font-outline-2 duration-300 ease-in group-hover:drop-shadow-button_hover'
        }
      >
        {children}
      </span>
      {variant == 'heart' && <Heart className={'h-6 w-6 fill-current'} />}
      {variant == 'trash' && <Trash className={'h-6 w-6 fill-current'} />}
    </button>
  );
};

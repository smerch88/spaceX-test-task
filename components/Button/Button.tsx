import cn from 'classnames';
import { ButtonProps } from './Button.props';
import Heart from 'public/images/heart.svg';

export const Button = ({
  variant,
  header = false,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        'group flex w-full justify-center font-syne text-2xl font-semibold uppercase text-very_dark',
        className,
        {
          ['bg-button p-3 ']: variant == 'primary',
          [' max-w-[53px] bg-heart p-[14.5px] hover:bg-heart_hover hover:text-white']:
            variant == 'heart',
        },
        header && 'max-w-[163px]',
      )}
      {...props}
    >
      <span
        className={
          'group-hover: text-bold group-hover:font-outline-2 group-hover:drop-shadow-button_hover'
        }
      >
        {children}
      </span>
      {variant == 'heart' && <Heart className={'h-6 w-6 fill-current'} />}
    </button>
  );
};

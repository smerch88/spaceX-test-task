import cn from 'classnames';
import { BtnClearAllProps } from './BtnClearAll.props';
import { useDispatch } from 'react-redux';
import { clearTours } from '@/redux/tours/tours-slice';

export const BtnClearAll = ({
  children,
  className,
  ...props
}: BtnClearAllProps): JSX.Element => {
    const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(clearTours());
  };
  return (
      <button onClick={handleClearAll}
        className={cn(
          'relative text-2xl font-medium leading-[29px]',
          'duration-300 after:ease-in hover:text-very_dark hover:bg-button',
          className,
        )}
        {...props}
      >
        {children}
      </button>
  );
};

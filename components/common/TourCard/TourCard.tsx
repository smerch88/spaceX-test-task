import { AppDispatch } from '@/redux/store';
import { addTour, deleteTour } from '@/redux/tours/tours-slice';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/buttons/Button';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { getTours } from '@/redux/tours/tours-selectors';
import Image from 'next/image';
import { CardWrapper } from '../CardWrapper';
import { TourCardProps } from './TourCard.props';

export const TourCard: FC<TourCardProps> = ({
  id,
  title,
  text,
  href,
  className,
  ...props
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const tours = useSelector(getTours);

  // find the tour with the matching id and get its like property
  const initialLike = tours.find(tour => tour.id === id)?.like ?? false;

  const [isLiked, setIsLiked] = useState(initialLike);

  const handleLikeClick = () => {
    setIsLiked(true); // toggle the state of isLiked
    dispatch(
      addTour({
        id,
        title,
        text,
        href,
        like: !isLiked, // toggle the value of like
      }),
    );
  };

  const handleLikeClickDelete = () => {
    setIsLiked(false); // toggle the state of isLiked
    dispatch(
      deleteTour({
        id,
      }),
    );
  };

  return (
    <ul className="mb-10">
      <CardWrapper
        className={cn(
          'max-w-[411px] border border-button text-center',
          className,
        )}
        {...props}
      >
        <div className="relative mb-8 h-[296px] w-full">
          <Image
            src={href}
            alt="space ship"
            fill
            style={{ objectFit: 'cover' }}
          ></Image>
        </div>
        <Title tag="h3" className="mb-4">
          {title}
        </Title>
        <Paragraph className="mb-16 px-8 line-clamp-2">{text}</Paragraph>
        <div className="flex gap-4 px-8 pb-6">
          <Button variant="primary">buy</Button>
          {isLiked ? (
            <Button variant="delete" onClick={handleLikeClickDelete} />
          ) : (
            <Button variant="heart" like={isLiked} onClick={handleLikeClick} />
          )}
        </div>
      </CardWrapper>
    </ul>
  );
};

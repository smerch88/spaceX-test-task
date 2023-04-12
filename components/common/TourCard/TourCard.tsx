import { FC } from 'react';
import cn from 'classnames';

import { TourCardProps } from './TourCard.props';
import { CardWrapper } from '../CardWrapper';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import Image from 'next/image';
import { Button } from '@/components/buttons/Button';

export const TourCard: FC<TourCardProps> = ({
  title,
  text,
  href,
  like = false,
  className,
  ...props
}) => {
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
        <Paragraph className="mb-16 px-8">{text}</Paragraph>
        <div className="flex gap-4 px-8 pb-6">
          <Button variant="primary">buy</Button>
          <Button variant="heart" like={like} />
        </div>
      </CardWrapper>
    </ul>
  );
};
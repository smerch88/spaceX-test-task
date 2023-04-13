import { Section } from '@/components/common/Section';
import { TourCard } from '@/components/common/TourCard';
import { getTours } from '@/redux/tours/tours-selectors';
import cn from 'classnames';
import { useSelector } from 'react-redux';

export const ToursFavsSection = () => {
  const tours = useSelector(getTours);

  return (
    <Section id="tours" className={cn('h-[100vh]')}>
      <div className="container">
        <ul className="grid grid-cols-3 gap-8">
          {tours.map(({ id, title, text, href }) => (
            <TourCard key={id} id={id} title={title} text={text} href={href} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

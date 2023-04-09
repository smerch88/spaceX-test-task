import { Section } from '@/components/common/Section';
import { TourCard } from '@/components/common/TourCard';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import cn from 'classnames';

const data = [
  {
    id: 1,
    title: 'extraordinary tour',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    href: '/images/slider/ship.png',
    like: false,
  },
  {
    id: 2,
    title: 'extraordinary tour',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    href: '/images/slider/girl.png',
    like: false,
  },
  {
    id: 3,
    title: 'extraordinary tour',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    href: '/images/slider/guy.png',
    like: false,
  },
];

export const ToursSection = () => {
  return (
    <Section id="tours" className={cn('h-[100vh]')}>
      <div className="container">
        <Title tag="h2" className="pt-24">
          popular tours
        </Title>
        <ul className="grid grid-cols-3 gap-6">
          {data.map(({ id, title, text, href, like }) => (
            <TourCard
              key={id}
              title={title}
              text={text}
              href={href}
              like={like}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
};

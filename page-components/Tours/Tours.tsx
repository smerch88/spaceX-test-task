import { Section } from '@/components/common/Section';
import { TourCard } from '@/components/common/TourCard';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import cn from 'classnames';
import Carousel from 'nuka-carousel';

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
  {
    id: 4,
    title: 'extraordinary tour',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    href: '/images/slider/ship.png',
    like: false,
  },
  {
    id: 5,
    title: 'extraordinary tour',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    href: '/images/slider/girl.png',
    like: false,
  },
  {
    id: 6,
    title: 'extraordinary tour',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    href: '/images/slider/guy.png',
    like: false,
  },
  {
    id: 7,
    title: 'extraordinary tour',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    href: '/images/slider/ship.png',
    like: false,
  },
  {
    id: 8,
    title: 'extraordinary tour',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    href: '/images/slider/girl.png',
    like: false,
  },
  {
    id: 9,
    title: 'extraordinary tour',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    href: '/images/slider/guy.png',
    like: false,
  },
];

const params = {
  defaultControlsConfig: {
    containerClassName: 'containerClassName2',
    pagingDotsClassName: 'pagingDotsClassName2',
    pagingDotsContainerClassName: 'pagingDotsContainerClassName2',
    pagingDotsStyle: {},
  },
  slidesToShow: 3,
  slidesToScroll: 3,
};

export const ToursSection = () => {
  return (
    <Section id="tours" className={cn('h-[100vh]')}>
      <div className="container">
        <Title tag="h2" className="pt-24">
          popular tours
        </Title>
        <ul className="">
          <Carousel {...params}>
            {data.map(({ id, title, text, href, like }) => (
              <TourCard
                key={id}
                title={title}
                text={text}
                href={href}
                like={like}
              />
            ))}
          </Carousel>
        </ul>
      </div>
    </Section>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Section } from '@/components/common/Section';
import { TourCard } from '@/components/common/TourCard';
import { Title } from '@/components/typography/Title';
import cn from 'classnames';
import Carousel from 'nuka-carousel';
import Left from 'public/images/Arrow-Left.svg';
import Right from 'public/images/Arrow-Right.svg';
import { ToursProps } from './Tours.props';

const cardImages = [
  { id: 1, src: '/images/slider/ship.png', alt: 'ship' },
  { id: 2, src: '/images/slider/guy.png', alt: 'guy' },
  { id: 3, src: '/images/slider/girl.png', alt: 'girl' },
];

const params = {
  defaultControlsConfig: {
    nextButtonText: '',
    prevButtonText: '',
    containerClassName: 'containerClassNameTours',
    pagingDotsClassName: 'pagingDotsClassNameTours',
    pagingDotsContainerClassName: 'pagingDotsContainerClassNameTours',
    pagingDotsStyle: {
      fill: '#black',
      width: '24px',
      height: '24px',
      border: '1px solid black',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      paddingLeft: '8px',
      paddingRight: '8px',
    },
    renderBottomCenterControls: null,
    renderCenterLeftControls: null,
    renderCenterRightControls: null,
    renderBottomLeftControls: null,
    renderBottomRightControls: null,
  },
  renderTopRightControls: ({ nextSlide, previousSlide }: any) => (
    <button
      className="bg-heart p-2.5 text-heart"
      style={{ position: 'absolute', top: '-80px', right: '16px' }}
      onClick={nextSlide}
    >
      <Right className={'h-6 w-6 fill-current'} />
    </button>
  ),
  renderTopLeftControls: ({ nextSlide, previousSlide }: any) => (
    <button
      className="bg-heart p-2.5 text-heart"
      style={{ position: 'absolute', top: '-80px', right: '76px' }}
      onClick={previousSlide}
    >
      <Left className={'h-6 w-6 fill-current'} />
    </button>
  ),
  renderCenterLeftControls: ({ previousSlide }: any) => null,
  renderCenterRightControls: ({ nextSlide }: any) => null,
  slidesToShow: 3,
  slidesToScroll: 3,
};

export const ToursSection: React.FC<ToursProps> = ({ ...props }: any) => {
  const numcardImages = cardImages.length;

  return (
    <Section id="tours" className={cn('h-[100vh]')}>
      <div className="container">
        <Title tag="h2" className="mb-10 pt-24">
          popular tours
        </Title>
        <ul className="">
          <Carousel {...params}>
            {props.data.rockets.map(
              ({ id, name, description }: any, idx: any) => (
                <TourCard
                  id={id}
                  key={id}
                  title={name}
                  text={description}
                  href={cardImages[idx % numcardImages].src}
                />
              ),
            )}
          </Carousel>
        </ul>
      </div>
    </Section>
  );
};

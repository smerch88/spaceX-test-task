import { Section } from '@/components/common/Section';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import cn from 'classnames';
import Arrow from 'public/images/Arrow-Down.svg';
import Carousel from 'nuka-carousel';

const carouselImages = [
  { id: 1, src: '/images/slider/ship.png', alt: 'ship' },
  { id: 2, src: '/images/slider/guy.png', alt: 'guy' },
  { id: 3, src: '/images/slider/girl.png', alt: 'girl' },
];

const params = {
  autoplay: true,
  wrapAround: true,
  defaultControlsConfig: {
    containerClassName: 'containerClassName',
    pagingDotsClassName: 'pagingDotsClassName',
    pagingDotsContainerClassName: 'pagingDotsContainerClassName',
    pagingDotsStyle: {
      fill: '#FFF',
      width: '24px',
      height: '24px',
      border: '1px solid white',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      paddingLeft: '8px',
    },
  },
  disableEdgeSwiping: true,
  disableSwipe: true,
};

export const HeroSection = () => {
  return (
    <Section
      className={cn(
        'relative h-[100vh] bg-heroTemp bg-cover pt-[239px] text-center !transition',
        'before:z- before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-dark/[.48] before:content-[""]',
      )}
    >
      <div
        className={cn(
          'z-1 absolute left-0 top-0 h-full w-full',
          'before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-dark/[.48] before:content-[""]',
        )}
      >
        <Carousel
          {...params}
          renderCenterLeftControls={({ previousSlide }) => null}
          renderCenterRightControls={({ nextSlide }) => null}
          // renderBottomCenterControls={() => (
          //   <ul className="absolute left-[47%] top-[52%]">
          //     <li className="">1</li>
          //     <li className="">2</li>
          //     <li className="">3</li>
          //   </ul>
          // )}
        >
          {carouselImages.map(image => (
            <div key={image.id} className="h-[100vh] object-cover">
              <img className="h-full w-full" src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container">
        <Title
          tag="h1"
          variant="light"
          className="absolute left-1/2 top-1/2 z-10 mb-[58px] -translate-x-1/2 -translate-y-1/2 transform"
        >
          The space is waiting for
          <br />
          <span className="text-[310px]">YOU</span>
        </Title>
        <a
          href="#tours"
          className="wrap absolute bottom-[33px] left-[50%] z-10 flex translate-x-[-50%]"
        >
          <Paragraph variant="outlined" className="mr-2">
            Explore tours
          </Paragraph>
          <Arrow className="h-[40px] w-[40px] animate-bounce" />
        </a>
      </div>
    </Section>
  );
};

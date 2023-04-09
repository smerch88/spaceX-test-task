import { Section } from '@/components/common/Section';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import cn from 'classnames';
import Arrow from 'public/images/Arrow-Down.svg';

export const HeroSection = () => {
  return (
    <Section
      className={cn(
        'relative h-[100vh] bg-heroTemp bg-cover pt-[239px] text-center !transition',
        'before:z- before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-dark/[.48] before:content-[""]',
      )}
    >
      <div className="container">
        <Title tag="h1" variant="light" className="relative z-10 mb-[58px]">
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
          <Arrow className="h-[40px] w-[40px]" />
        </a>
      </div>
    </Section>
  );
};

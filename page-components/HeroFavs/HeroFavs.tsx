import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import cn from 'classnames';

export const HeroFavsSection = () => {
  return (
    <Section
      className={cn(
        'relative h-[370px] bg-heroTemp bg-cover pt-[239px] text-center !transition',
        'before:z- before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-dark/[.48] before:content-[""]',
      )}
    >
      <div className="container">
        <Title
          tag="h1"
          variant="light"
          className="absolute left-1/2 top-1/2 z-10 mb-[58px] -translate-x-1/2 -translate-y-1/2 transform"
        >
          favourites
        </Title>
      </div>
    </Section>
  );
};

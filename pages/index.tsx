import { withLayout } from '@/layout/Layout';
import { HeroSection } from '@/page-components/Hero';
import { ToursSection } from '@/page-components/Tours';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ToursSection />
    </>
  );
};

export default withLayout(Home);

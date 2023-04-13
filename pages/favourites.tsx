import { withLayout } from '@/layout/Layout';
import { HeroFavsSection } from '@/page-components/HeroFavs';

const Favourites = () => {
  return (
    <>
      <HeroFavsSection />
    </>
  );
};

export default withLayout(Favourites);

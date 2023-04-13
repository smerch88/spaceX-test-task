import { withLayout } from '@/layout/Layout';
import { HeroFavsSection } from '@/page-components/HeroFavs';
import { ToursFavsSection } from '@/page-components/ToursFavs';

const Favourites = () => {
  return (
    <>
      <HeroFavsSection />
      <ToursFavsSection />
    </>
  );
};

export default withLayout(Favourites);

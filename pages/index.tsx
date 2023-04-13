import { gql } from '@apollo/client';
import { GetStaticProps, NextPage } from 'next';

import { withLayout } from '@/layout/Layout';
import { getApolloClient } from '@/utils/apollo-client';

import { HeroSection } from '@/page-components/Hero';
import { ToursSection } from '@/page-components/Tours';

const Home: NextPage = ({ ...props }: any) => {
  return (
    <>
      <HeroSection />
      <ToursSection {...props} />
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const client = getApolloClient();
  const { data } = await client.query({
    query: gql`
      query ExampleQuery {
        rockets {
          id
          description
          name
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
};

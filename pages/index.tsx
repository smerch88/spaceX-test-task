/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client';
import { GetStaticProps, NextPage } from 'next';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';

import { withLayout } from '@/layout/Layout';
import { getApolloClient } from '@/utils/apollo-client';

import { HeroSection } from '@/page-components/Hero';
import { ToursSection } from '@/page-components/Tours';
import { Modal } from '@/components/common/Modal';

const Home: NextPage = ({ ...props }: any) => {
  return (
    <>
      <Modal>
        <Title>Warning</Title>
        <Paragraph>
          This WebApp developed under the 1440px width template. It could
          display not correctly if your screen resolution is different.
        </Paragraph>
      </Modal>
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

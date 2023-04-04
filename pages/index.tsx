import { Button } from '@/components/Button';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';

export default function Home() {
  return (
    <>
      <Title tag="h1" variant="light">
        The space is waiting for
      </Title>
      <Title tag="h2">The space is waiting for</Title>
      <Title tag="h3">The space is waiting for</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipiscing elit
      </Paragraph>
      <div
        style={{
          width: '500px',
          display: 'flex',
          background: 'green',
          gap: '20px',
        }}
      >
        <Button variant="primary">default</Button> <Button variant="heart" />
      </div>
      <Button variant="heart" />
      <Button variant="primary" header>
        header
      </Button>
    </>
  );
}

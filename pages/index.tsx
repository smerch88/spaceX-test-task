import { Button } from '@/components/Button';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import { withLayout } from '@/layout/Layout';

const Home = () => {
  return (
    <>
      <Title tag="h1" variant="light">
        The space is waiting for
      </Title>
      <Title tag="h2">The space is waiting for</Title>
      <Title tag="h3">The space is waiting for</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        consectetur temporibus accusantium quo doloribus illum corrupti dolor
        tempore, hic, quasi dolore provident eos earum consequuntur? Ipsa minima
        dicta libero magni quam excepturi qui nesciunt, cupiditate, illum eaque
        quo. Ipsum sit nulla esse debitis, repellendus suscipit nobis.
        Accusantium vel aliquam sed maiores officia minus alias saepe, at
        officiis accusamus temporibus, iure modi nam hic optio! Quae adipisci
        accusamus quaerat enim fugiat unde cupiditate hic, ab temporibus dicta.
        At sapiente incidunt ipsum id totam deleniti quod quisquam quis dolorem
        soluta alias esse, ipsa quas sit assumenda? Magnam accusamus debitis
        cumque, quas inventore obcaecati, eaque, iure dolorum aliquid placeat
        quos quia? Dolore, cumque officia ut nemo dignissimos adipisci repellat
        architecto incidunt necessitatibus consequuntur error cupiditate
        repudiandae quos. Nulla quos dicta dolore odit voluptatum delectus
        veritatis reiciendis ullam, sit similique. Alias ea voluptate fuga enim
        dolores laudantium, exercitationem repellat ratione corrupti expedita
        autem, asperiores voluptatum. Optio dolores facilis voluptates eligendi
        illo reiciendis similique dolorum cupiditate id corporis nulla ab,
        provident magni itaque dolore. Atque eveniet quibusdam perferendis! Ad
        dignissimos cumque consectetur repudiandae quae. Vel dolor aut illo
        accusantium iste ipsam, consectetur laudantium eos error repellat quae
        qui facilis sunt minima quis eaque expedita voluptatem placeat?
        Aspernatur, at. Consequuntur pariatur quibusdam autem, mollitia odio
        animi dolores necessitatibus libero voluptates quasi, minus deleniti
        quis hic eius voluptas aspernatur veniam neque magni maxime ea sunt.
        Nesciunt eveniet et, itaque totam cupiditate est assumenda asperiores
        quos in quasi ab inventore libero dolorum mollitia necessitatibus eaque
        molestiae error. Quis eveniet facilis amet saepe excepturi placeat
        temporibus laudantium deserunt repellat? Iusto adipisci quas nam magni
        et. Adipisci, libero cum asperiores suscipit possimus vitae in sint
        neque laborum minima soluta inventore quidem voluptatum ullam voluptatem
        quae earum hic explicabo provident. Iure velit obcaecati adipisci!
        Voluptatum architecto recusandae voluptatibus necessitatibus saepe,
        impedit earum perspiciatis eos mollitia ipsa, laudantium autem enim
        atque. Vero voluptatum velit nesciunt tempore! Ducimus velit perferendis
        natus similique nisi ut? Asperiores ipsa culpa incidunt reiciendis
        tenetur facere, sapiente optio recusandae, eligendi nulla hic ullam esse
        laudantium sunt? Magnam magni quae explicabo earum placeat architecto
        voluptatibus quasi deserunt labore. Laborum dicta ab dolorem earum
        provident nisi quae doloremque? Eius ipsum id reprehenderit doloremque
        voluptates harum veniam, ullam iure quos ducimus quia dolore ut,
        praesentium commodi, eos et quasi at ipsam aut rem voluptate maiores hic
        quae labore? Officiis reprehenderit minima repellendus excepturi maiores
        nihil sit repudiandae commodi, suscipit atque tempora vitae deserunt
        fugiat quos aut, quam voluptatibus earum assumenda laborum eius itaque.
        Error, veritatis et. Repellendus aperiam minima fugiat adipisci quas
        quae incidunt possimus quod magni cupiditate laudantium ipsam, vitae
        eligendi blanditiis officiis nulla esse expedita corrupti quisquam
        asperiores! Laboriosam, sunt sit dicta eum cupiditate, voluptates neque
        modi, qui provident culpa nihil alias. Culpa deleniti debitis nesciunt
        quia repellat quam error voluptatem laudantium dicta eos repudiandae,
        quisquam a commodi quo reprehenderit maiores ex, voluptas doloremque
        eaque. Unde, quaerat quis tenetur commodi sequi ipsa. Suscipit
        temporibus totam fugit, illo sequi deleniti, ad ea impedit, debitis
        laudantium nesciunt. Sit, laborum! Exercitationem, dicta?
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
};

export default withLayout(Home);

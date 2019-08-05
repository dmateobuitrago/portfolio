import Layout from "../components/layout/Layout";
import GridContainer from "../components/atoms/GridContainer";
import GridBlock from "../components/atoms/GridBlock";
import ProjectCard from "../components/molecules/ProjectCard";
import OneBigColum from "../components/layout/OneBigColumn";

const imgPath = '/static/images/';

function Index() {
  return (
    <Layout home={true}>
      <OneBigColum>
        <GridBlock col="8" colSmall="4" colMedium="4" padding>
          <ProjectCard
            name="Juan-on-Juan"
            tagline="I designed a website for an sports magazine. →"
            tag="ui design"
            img={imgPath+'juan.png'}
            id="1"
          />
        </GridBlock>
        <GridBlock col="8" colSmall="4" colMedium="4"  padding>
          <ProjectCard
            name="Print.Eat"
            tagline="How would we eat in 2080? →"
            tag="speculative design"
            img={imgPath+'juan.png'}
            id="2"
          />
        </GridBlock>
        <GridBlock col="8" colSmall="4" colMedium="4"  padding>
          <ProjectCard
            name="Agruppa apps"
            tagline="Delivering fruits and vegetables to colombian mom-and-pop shops. →"
            tag="ux design"
            img={imgPath+'juan.png'}
          />
        </GridBlock>
        <GridBlock col="8" colSmall="4" colMedium="4"  padding>
          <ProjectCard
            name="VirtuaBroker"
            tagline="Let some bots trade for you on the cryptomarket. →"
            tag="ux design"
            img={imgPath+'juan.png'}
          />
        </GridBlock>
        <GridBlock col="8" colSmall="4" colMedium="4"  padding>
          <ProjectCard
            name="Broken Symmetry"
            tagline="Wes Anderson retrospective screening. →"
            tag="branding"
            img={imgPath+'juan.png'}
          />
        </GridBlock>
      </OneBigColum>
    </Layout>
  );
}

export default Index;

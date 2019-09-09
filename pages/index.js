import Layout from "../components/layout/Layout";
import GridBlock from "../components/atoms/GridBlock";
import ProjectCard from "../components/molecules/ProjectCard";
import OneBigColum from "../components/layout/OneBigColumn";
import Divider from "../components/atoms/Divider";
import { data } from "../static/data/data";

const projects = data.projects;
const juan = projects[0];
const broken = projects[1];

const imgPath = '/static/images/';

function Index() {
  return (
    <Layout home={true}>
      <OneBigColum>
        <GridBlock col="8" padding>
          <ProjectCard
            name={juan.title}
            tagline={juan.tagline}
            tag={juan.tags}
            slug={juan.slug}
            img={imgPath+juan.image}
            id={juan.id}
          />
          <Divider/>
        </GridBlock>
        <GridBlock col="8" padding>
          <ProjectCard
            name={broken.title}
            tagline={broken.tagline}
            tag={broken.tags}
            slug={broken.slug}
            img={imgPath+broken.image}
            id={broken.id}
          />
        </GridBlock>
      </OneBigColum>
    </Layout>
  );
}

export default Index;

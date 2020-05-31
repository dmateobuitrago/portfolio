import React from 'react';
import Layout from "../components/layout/Layout";
import GridBlock from "../components/atoms/GridBlock";
import ProjectCard from "../components/molecules/ProjectCard";
import OneBigColum from "../components/layout/OneBigColumn";
import Footer from "../components/layout/Footer";
import Divider from "../components/atoms/Divider";
import { data } from "../static/data/data";
import Typography from '../components/atoms/Typography';

const projects = data.projects;
const verse = projects[0];
const juan = projects[1];
const print = projects[2];
const broken = projects[3];
const tmb = projects[4];

const imgPath = '/static/images/';

function Index() {
  return (
    <Layout home={true}>
      <OneBigColum>
        <GridBlock col="8">
          <ProjectCard
            name={verse.title}
            tagline={verse.tagline}
            tag={verse.tags}
            slug={verse.slug}
            img={imgPath+verse.image}
            id={verse.id}
          />
          <Divider/>
        </GridBlock>
        <GridBlock col="8">
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
        <GridBlock col="8">
          <ProjectCard
            name={print.title}
            tagline={print.tagline}
            tag={print.tags}
            slug={print.slug}
            img={imgPath+print.image}
            id={print.id}
          />
          <Divider/>
        </GridBlock>
        <GridBlock col="8">
          <ProjectCard
            name={broken.title}
            tagline={broken.tagline}
            tag={broken.tags}
            slug={broken.slug}
            img={imgPath+broken.image}
            id={broken.id}
          />
          <Divider/>
        </GridBlock>
        <GridBlock col="8">
          <ProjectCard
            name={tmb.title}
            tagline={tmb.tagline}
            tag={tmb.tags}
            slug={tmb.slug}
            img={imgPath+tmb.image}
            id={tmb.id}
          />
          <Divider/>
        </GridBlock>
      </OneBigColum> 
    </Layout>
  );
}

export default Index;

import React from "react";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/molecules/ProjectCard";
import OneBigColumn from "../components/layout/OneBigColumn";
import { data } from "../static/data/data";
import Typography from "../components/atoms/Typography";
import GridBlock from "../components/atoms/GridBlock";

const projects = data.projects;
const checkout = projects[0];
const tokens = projects[1];
const verse = projects[2];
const juan = projects[3];
const broken = projects[4];

const imgPath = "/static/images/";

function Index() {
  return (
    <Layout home={true}>
      <OneBigColumn gap>
        <div style={{width:'100%'}}>
        <Typography type="subtitle" dark bold>
          Selected work
        </Typography>
        </div>
        <ProjectCard
          name={checkout.title}
          tagline={checkout.tagline}
          tag={checkout.tags}
          slug={checkout.slug}
          img={imgPath + checkout.image}
          id={checkout.id}
          isExternal={checkout.isExternal}
          externalUrl={checkout.externalUrl}
        />
        <ProjectCard
          name={tokens.title}
          tagline={tokens.tagline}
          tag={tokens.tags}
          slug={tokens.slug}
          img={imgPath + tokens.image}
          id={tokens.id}
          isExternal={tokens.isExternal}
          externalUrl={tokens.externalUrl}
        />
        <ProjectCard
          name={verse.title}
          tagline={verse.tagline}
          tag={verse.tags}
          slug={verse.slug}
          img={imgPath + verse.image}
          id={verse.id}
          isExternal={verse.isExternal}
        />
        <ProjectCard
          name={juan.title}
          tagline={juan.tagline}
          tag={juan.tags}
          slug={juan.slug}
          img={imgPath + juan.image}
          id={juan.id}
          isExternal={juan.isExternal}
        />
        <ProjectCard
          name={broken.title}
          tagline={broken.tagline}
          tag={broken.tags}
          slug={broken.slug}
          img={imgPath + broken.image}
          id={broken.id}
          isExternal={broken.isExternal}
          externalUrl={broken.externalUrl}
        />
      </OneBigColumn>
    </Layout>
  );
}

export default Index;

import React from "react";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/molecules/ProjectCard";
import OneBigColum from "../components/layout/OneBigColumn";
import Divider from "../components/atoms/Divider";
import { data } from "../static/data/data";

const projects = data.projects;
const checkout = projects[0];
const tokens = projects[1];
const verse = projects[2];
const juan = projects[3];
// const print = projects[4];
const broken = projects[6];
// const tmb = projects[6];

const imgPath = "/static/images/";

function Index() {
  return (
    <Layout home={true}>
      <OneBigColum>
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
        <Divider />
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
        <Divider />
        <ProjectCard
          name={verse.title}
          tagline={verse.tagline}
          tag={verse.tags}
          slug={verse.slug}
          img={imgPath + verse.image}
          id={verse.id}
          isExternal={verse.isExternal}
        />
        <Divider />
        <ProjectCard
          name={juan.title}
          tagline={juan.tagline}
          tag={juan.tags}
          slug={juan.slug}
          img={imgPath + juan.image}
          id={juan.id}
          isExternal={juan.isExternal}
        />
        <Divider />
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
        <Divider />
      </OneBigColum>
    </Layout>
  );
}

export default Index;

import React from "react";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/molecules/ProjectCard";
import OneBigColumn from "../components/layout/OneBigColumn";
import { data } from "../static/data/data";
import Typography from "../components/atoms/Typography";
import GridBlock from "../components/atoms/GridBlock";

const projects = data.projects;
const rebranding = projects[0];
const checkout = projects[1];
const tokens = projects[2];
const verse = projects[3];
const perkFiltering = projects[6];

const imgPath = "/static/images/";

function Index() {
  return (
    <Layout home={true}>
      <OneBigColumn gap>
        <div style={{ width: "100%" }}>
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
          name={perkFiltering.title}
          tagline={perkFiltering.tagline}
          tag={perkFiltering.tags}
          slug={perkFiltering.slug}
          img={imgPath + perkFiltering.image}
          id={perkFiltering.id}
          isExternal={perkFiltering.isExternal}
        />
        <ProjectCard
          name={rebranding.title}
          tagline={rebranding.tagline}
          tag={rebranding.tags}
          slug={rebranding.slug}
          img={imgPath + rebranding.image}
          id={rebranding.id}
          isExternal={rebranding.isExternal}
          externalUrl={rebranding.externalUrl}
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
      </OneBigColumn>
    </Layout>
  );
}

export default Index;

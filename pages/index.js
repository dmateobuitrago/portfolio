import React from "react";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/molecules/ProjectCard";
import OneBigColumn from "../components/layout/OneBigColumn";
import { data } from "../static/data/data";
import Typography from "../components/atoms/Typography";
import GridBlock from "../components/atoms/GridBlock";
import Intro from "./components/Intro";
import styles from "./Index.module.css";
import Divider from "../components/atoms/Divider";

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
        <Intro />
        <div className={styles.projectGroup}>
          <div>
            <Typography type="title" bold dark>
              Improved business travel
            </Typography>
            <Typography type="body" dark>
              Perk (2021 - Today)
            </Typography>
          </div>
          <Typography type="body" dark>
            Travelling for work can be overwhelming. My mission was to deliver a
            friction less experience when booking travel, one where our
            customers can rely and spend as little time as possible to succeed
            in their actual jobs.
          </Typography>
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
        </div>
        <div className={styles.projectGroup}>
          <div>
            <Typography type="title" bold dark>
              Scaled Perk’s design foundations
            </Typography>
            <Typography type="body" dark>
              Perk (2021 - 2024)
            </Typography>
          </div>
          <Typography type="body" dark>
            I had the opportunity to work in a dedicated role to scale Perk’s
            design system, having a rebrand in the horizon and later brought to
            life that new identity into the web product.
          </Typography>
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
            name={rebranding.title}
            tagline={rebranding.tagline}
            tag={rebranding.tags}
            slug={rebranding.slug}
            img={imgPath + rebranding.image}
            id={rebranding.id}
            isExternal={rebranding.isExternal}
            externalUrl={rebranding.externalUrl}
          />
        </div>
      </OneBigColumn>
    </Layout>
  );
}

export default Index;

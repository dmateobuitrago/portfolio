import React, { useRef } from "react";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/molecules/ProjectCard";
import OneBigColumn from "../components/layout/OneBigColumn";
import { data } from "../static/data/data";
import Typography from "../components/atoms/Typography";
import GridBlock from "../components/atoms/GridBlock";
import Intro from "./components/Intro";
import styles from "./Index.module.css";
import Divider from "../components/atoms/Divider";
// Import and register GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = data.projects;
const rebranding = projects[0];
const checkout = projects[1];
const tokens = projects[2];
const perkFiltering = projects[6];
const bookingConfirmation = projects[7];
const nameCorrections = projects[8];

const imgPath = "/static/images/";

function Index() {
  const main = useRef();

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(`.${styles.projectGroup} > div`);
      elements.forEach((element) => {
        gsap.from(element, {
          y: 10,
          duration: 0.4,
          opacity: 0,
          ease: "expo.in",
          scrollTrigger: {
            trigger: element,
            toggleActions: "play none none none",
            start: "top 75%",
            end: "top 20%",
            // scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main },
  );

  return (
    <Layout home={true}>
      <OneBigColumn gap>
        <Intro />
        <div ref={main}>
          <div className={styles.projectGroup}>
            <div>
              <Typography type="subtitle" bold dark>
                Improving business travel
              </Typography>
              <Typography type="body" dark>
                At Perk, my mission is to deliver a friction-less experience for
                business travelers. One where they can rely and spend as little
                time as possible, so they can succeed in their real jobs.
              </Typography>
            </div>
            <ProjectCard
              className="project-card"
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
              className="project-card"
              name={bookingConfirmation.title}
              tagline={bookingConfirmation.tagline}
              tag={bookingConfirmation.tags}
              img={imgPath + bookingConfirmation.image}
              id={bookingConfirmation.id}
            />
            <ProjectCard
              className="project-card"
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
              <Typography type="subtitle" bold dark>
                Reducing support tickets through clearer UX
              </Typography>
              <Typography type="body" dark>
                Perk's customer care team handles thousands of tickets that that
                clear UX can prevent. I worked across multiple initiatives to
                reduce those tickets, optimising cost to serve.
              </Typography>
            </div>
            <ProjectCard
              className="project-card"
              name={nameCorrections.title}
              tagline={nameCorrections.tagline}
              tag={nameCorrections.tags}
              img={imgPath + nameCorrections.image}
              id={nameCorrections.id}
            />
          </div>
          <div className={styles.projectGroup}>
            <div>
              <Typography type="subtitle" bold dark>
                Scaled Perk’s design foundations
              </Typography>
              <Typography type="body" dark>
                I maintained and scaled Perk’s design system, setting it up for
                successful a rebrand.
              </Typography>
            </div>
            <ProjectCard
              className="project-card"
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
              className="project-card"
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
        </div>
      </OneBigColumn>
    </Layout>
  );
}

export default Index;

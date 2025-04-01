import Layout from "../components/layout/Layout";
import Divider from "../components/atoms/Divider";
import Typography from "../components/atoms/Typography";
import OneBigColumn from "../components/layout/OneBigColumn";
import GridBlock from "../components/atoms/GridBlock";

function calculateJobExperience(startDate = new Date("2017-01-01")) {
  const now = new Date();
  const diffInMilliseconds = now - startDate;
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  return parseFloat(diffInYears.toFixed(1)); // rounded to 1 decimal place
}

function About() {
  return (
    <Layout>
      <OneBigColumn>
        <GridBlock col="8" colMedium="6" pt pr pl>
          <Typography type="title" dark bold>
            I'm Mateo
          </Typography>
          <Typography type="body" dark>
            I've been working {calculateJobExperience()} years as a Product
            Designer. My biggest experiences have been in the Business Travel
            Industry, with TravelPerk, and a Spanish peer-to-peer payment app
            called Verse.
          </Typography>
          <Divider />
          <Typography type="Subtitle" dark bold>
            I'm living in Barcelona
          </Typography>
          <Typography type="body" dark>
            Although I'm colombian, I moved to Barcelona to study Interaction
            Design and landed a job that gave me the opportunity to live the
            mediterranean dream.
          </Typography>
          <Divider />
          <Typography type="Subtitle" dark bold>
            I like Product Design
          </Typography>
          <Typography type="body" dark>
            I really value knowing that my work is making an impact, that someone is using whatever I designed, that I'm maybe helping someone fill a form faster. Also is good to know you're making a company do better, but to be honest that's the least favorites of my reasons to be a Product Designer.
          </Typography>
          <Divider />
          <Typography type="Subtitle" dark bold>
            I like UI
          </Typography>
          <Typography type="body" dark>
            I come from a graphic design background, so I do my best to create visually appealing products. Also, I'm kind of a frustrated developer, so I like to mess a bit with code and help engineers to move paddings here and there. I coded this porftolio that you're reading.
          </Typography>
          <Divider />
          <Typography type="Subtitle" dark bold>
            I like being part of a team
          </Typography>
          <Typography type="body" dark>
            We are humans beings, we like to be part of something. I enjoy collaborating with talented, but more importantly nice people. I'll be nice too, if I can help you, I will.
          </Typography>
          <Divider />
        </GridBlock>
        <GridBlock col="0" colMedium="2"></GridBlock>
      </OneBigColumn>
    </Layout>
  );
}

export default About;

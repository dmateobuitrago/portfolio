import Layout from "../components/layout/Layout";
import Divider from "../components/atoms/Divider";
import Typography from "../components/atoms/Typography";
import OneBigColumn from "../components/layout/OneBigColumn";
import GridBlock from "../components/atoms/GridBlock";
import VideoWithCaption from "../components/project/VideoWithCaption";
import ImageWithCaption from "../components/project/ImageWithCaption";

const imgPath = "/static/images/";

function HowIWorkWithAI() {
  return (
    <Layout>
      <OneBigColumn>
        <GridBlock col="8" colMedium="6">
          <Typography type="title" dark bold>
            How I work with AI
          </Typography>
          <Typography type="body" dark>
            Last updated: May 2026
          </Typography>
          <Divider />
          <Typography type="body" dark>
            Internet is full of examples and use cases for AI. This is my
            personal view of I currently use this tools to optimise my process.
          </Typography>
          <Divider />
          <Typography type="body" dark bold>
            Optimising my day-to-day
          </Typography>
          <Typography type="body" dark>
            My AI assistant has context of all the projects that I'm working on.
            From customer insights, problem statements, data analysis, company
            goals to any project document. With all of this context, I leverage
            on AI to produce outputs to get quick alignment with the team, for
            example a product vision narrative or an interactive prototype.
          </Typography>
        </GridBlock>
        <Divider />
        <ImageWithCaption
          image="me/claude.png"
          body="A sneak peak of my current setup"
        />
        <GridBlock col="8" colMedium="6">
          <Divider />
          <Typography type="body" dark bold>
            Analysing user research
          </Typography>
          <Typography type="body" dark>
            Leveraging on a previously created research plan, clear hypothesis
            and goals, you can plug that into an AI agent, share interview
            transcripts and make sense of the sessions. Something that took days
            of work, you can do it in a single day.
          </Typography>
          <Divider />
          <Typography type="body" dark bold>
            Prototyping within the codebase
          </Typography>
          <Typography type="body" dark>
            This is about building almost-ready-to-ship prototypes, where I can
            see how would they work with real data and in the context of the
            product.
          </Typography>
          <Divider />
        </GridBlock>
        <VideoWithCaption
          video="me/morning-afternoon-evening.mov"
          body="I quickly prototyped a shortcut to filter flights by Morning, Afternoon or Evening"
        />
        <GridBlock col="8" colMedium="6">
          <Divider />
          <Typography type="body" dark bold>
            Shipping changes to production
          </Typography>
          <Typography type="body" dark>
            Before AI assistants came in, I was able to ship small color,
            spacing updates directly to production. Now, I can go one step
            further, things like updating deprecated components can get complex
            and now I can do it without engineering support.
          </Typography>
          <Divider />
        </GridBlock>
        <ImageWithCaption
          image="me/contributions.gif"
          body="I've been continously contributing to production code"
        />
      </OneBigColumn>
    </Layout>
  );
}

export default HowIWorkWithAI;

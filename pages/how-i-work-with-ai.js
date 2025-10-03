import Layout from "../components/layout/Layout";
import Divider from "../components/atoms/Divider";
import Typography from "../components/atoms/Typography";
import OneBigColumn from "../components/layout/OneBigColumn";
import GridBlock from "../components/atoms/GridBlock";
import VideoWithCaption from "../components/project/VideoWithCaption";

const imgPath = "/static/images/";

function HowIWorkWithAI() {
  return (
    <Layout>
      <OneBigColumn>
        <GridBlock col="8" colMedium="6" pt pr pl>
          <Typography type="title" dark bold>
            How I work with AI
          </Typography>
          <Typography type="body" dark>
            Last updated: October 2025
          </Typography>
          <Divider />
          <Typography type="body" dark>
            Internet is full of examples and use cases for AI. This is my
            personal view of I currently use this tools to optimise my process.
          </Typography>
          <Divider />
          <Typography type="subtitle" dark bold>
            Drafting any type of documents
          </Typography>
          <Typography type="body" dark>
            Getting early alignment is key for success. Using well structured
            documents is a step towards that alignment. I'll leverage on tools
            like ChatGPT to share just enough context and let them structure a
            clear document, which I'll later edit and complete.
          </Typography>
          <Divider />
          <Typography type="subtitle" dark bold>
            Making sense of research
          </Typography>
          <Typography type="body" dark>
            Analysing research can be overwhelming. Leveraging on a previously
            created research plan, clear hypothesis and goals, you can plug that
            into an AI agent, share interview transcripts and make sense of the
            sessions.
          </Typography>
          <Divider />
          <Typography type="subtitle" dark bold>
            Prototyping within the codebase
          </Typography>
          <Typography type="body" dark>
            This is about building almost ready to ship prototypes, where I can
            see how would they work with real data and in the context of the
            product. Although I have some technical expertise, the help of tools
            like Cursor or Copilot enables me to try more complex features.
          </Typography>
        </GridBlock>
        <VideoWithCaption
          video="me/morning-afternoon-evening.mov"
          body="I quickly prototyped a shortcut to filter flights by Morning, Afternoon or Evening"
        ></VideoWithCaption>
          <GridBlock col="8" colMedium="6" pt pr pl>
          <Typography type="body" dark>
            This is where I've found the most impactful use cases in my day to day job.
          </Typography>
          <Divider/>
          <Typography type="body" dark>
            This was written without the help of AI.
          </Typography>
          </GridBlock>
      </OneBigColumn>
    </Layout>
  );
}

export default HowIWorkWithAI;

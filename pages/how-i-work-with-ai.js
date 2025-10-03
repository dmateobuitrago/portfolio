import Layout from "../components/layout/Layout";
import Divider from "../components/atoms/Divider";
import Typography from "../components/atoms/Typography";
import OneBigColumn from "../components/layout/OneBigColumn";
import GridBlock from "../components/atoms/GridBlock";

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
            Empty canvas...
          </Typography>
          <Divider />
        </GridBlock>
        <GridBlock col="0" colMedium="2"></GridBlock>
      </OneBigColumn>
    </Layout>
  );
}

export default HowIWorkWithAI;
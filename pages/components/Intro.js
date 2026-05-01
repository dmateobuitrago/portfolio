import Divider from "../../components/atoms/Divider";
import Typography from "../../components/atoms/Typography";
import GridBlock from "../../components/atoms/GridBlock";

const imgPath = "/static/images/";

function Intro() {
  return (
    <GridBlock col="8" colMedium="8">
      <img src={imgPath + "me/Portrait.png"} width={80} />
      <Typography type="huge" dark bold>
        I’m Mateo
      </Typography>
      <Typography type="subtitle" dark>
        I’m a Senior Product Designer with +7 years of experience
      </Typography>
      <Typography type="subtitle" dark>
        I craft and build digital products that improves people day-to-day and
        translate to business impact.
      </Typography>
      <Divider />
    </GridBlock>
  );
}

export default Intro;

import Typography from "../../components/atoms/Typography";
import styles from "./Intro.module.css";

const imgPath = "/static/images/";

function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.top}>
        <img src={imgPath + "me/Portrait.png"} width={80} />
        <Typography type="huge" dark bold>
          I’m Mateo
        </Typography>
      </div>
      <div className={styles.taglines}>
        <Typography className={styles.tagline} type="subtitle" dark>
          I’m a Senior Product Designer with +7 years of experience
        </Typography>
        <Typography className={styles.tagline} type="subtitle" dark>
          I craft digital products that improves people's day-to-day and
          translate to business impact.
        </Typography>
      </div>
    </div>
  );
}

export default Intro;

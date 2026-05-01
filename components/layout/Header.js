import React from "react";
import GridBlock from "../atoms/GridBlock";
import Divider from "../atoms/Divider";
import Typography from "../atoms/Typography";
import Link from "next/link";
import MyLink from "../atoms/MyLink";
import { data } from "../../static/data/data.js";
import OneBigColumn from "./OneBigColumn";
import styles from "./Header.module.css";
import GridContainer from "../atoms/GridContainer.js";

const imgPath = "/static/images/";

const Header = ({ isHome }) => {
  const renderLinks = () => {
    return (
      <div className={styles.linksBlock}>
        {data.navBarLinks.map((item, index) => (
          <Typography type="small" dark>
            <Link className="textLink" key={index} href={item[1]}>
              {item[0]}
            </Link>
          </Typography>
        ))}
      </div>
    );
  };

  return (
    <OneBigColumn>
      <div className={styles.navBar}>
        {isHome ? (
          <Typography type="small" bold dark>
            Mateo Buitrago Jara
          </Typography>
        ) : (
          <Typography type="small" dark>
            <Link className="textLink" href="/">
              ← Home
            </Link>
          </Typography>
        )}

        {renderLinks()}
      </div>
    </OneBigColumn>
  );
};

export default Header;

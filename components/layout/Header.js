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
          <MyLink key={index} href={item[1]}>
            {item[0]}
          </MyLink>
        ))}
      </div>
    );
  };

  return (
    <OneBigColumn>
      <div className={styles.navBar}>
        <Typography type="body" bold dark>
          Mateo Buitrago Jara
        </Typography>
        {renderLinks()}
      </div>
    </OneBigColumn>
  );
};

export default Header;

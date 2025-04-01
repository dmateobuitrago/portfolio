import React from "react";
import GridBlock from "../atoms/GridBlock";
import Divider from "../atoms/Divider";
import Typography from "../atoms/Typography";
import Link from "next/link";
import MyLink from "../atoms/MyLink";
import { data } from "../../static/data/data.js";
import OneBigColumn from "./OneBigColumn";
import styled from "styled-components";

const imgPath = "/static/images/";

const LinksBlock = styled(GridBlock)`
  align-items: flex-end;
  gap: ${(props) => props.theme.baseUnit2};
`;

const Header = ({ isHome }) => {
  const renderLinks = () =>
    data.links.map((item, index) => (
        <MyLink key={index} href={item[1]}>{item[0]}</MyLink>
    ));

  const renderDescription = () => (
    <Typography type="body" dark>
      I’m a Senior Product Designer living in Barcelona. Currently working at
      TravelPerk.
    </Typography>
  );

  const renderHomeHeader = () => (
    <OneBigColumn>
      <GridBlock col="8" colLarge="2" pr>
        <img src={imgPath + 'me/Portrait.png'} width={80} />
        <Typography type="subtitle" bold dark>
          Mateo Buitrago Jara
        </Typography>
        {renderDescription()}
      </GridBlock>
      <LinksBlock col="8" colLarge="6" isGridContainer pt>
        {renderLinks()}
      </LinksBlock>
    </OneBigColumn>
  );

  const renderNavHeader = () => (
    <OneBigColumn>
      <Typography type="subtitle" bold dark>
        <Link href="/">← back</Link>
      </Typography>
    </OneBigColumn>
  );

  return (
    <header>
      <Divider />
      {isHome ? renderHomeHeader() : renderNavHeader()}
      <Divider />
    </header>
  );
};

export default Header;

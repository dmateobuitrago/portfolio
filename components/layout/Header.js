import React from "react";
import GridBlock from "../atoms/GridBlock";
import Divider from "../atoms/Divider";
import Typography from "../atoms/Typography";
import Link from "next/link";
import MyLink from "../atoms/MyLink";
import { data } from "../../static/data/data.js";
import OneBigColumn from "./OneBigColumn";
import styled from "styled-components";
import GridContainer from "../atoms/GridContainer.js";

const imgPath = "/static/images/";

const LinksBlock = styled(GridBlock)`
  align-items: flex-end;
  gap: ${(props) => props.theme.baseUnit2};
`;

const Header = ({ isHome }) => {
  const renderLinks = () => {
    return (
      <LinksBlock isGridContainer pt pb>
        {data.links.map((item, index) => (
          <MyLink key={index} href={item[1]}>
            {item[0]}
          </MyLink>
        ))}
      </LinksBlock>
    );
  };
  

  const renderDescription = () => (
    <Typography type="subtitle" dark>
      I’m a Senior Product Designer, currently working at
      TravelPerk.
    </Typography>
  );

  const renderHomeHeader = () => (
    <OneBigColumn>
      <GridContainer flexDirection="column">
        <img src={imgPath + 'me/Portrait.png'} width={80} />
        <Typography type="title" bold dark>
          Mateo Buitrago Jara
        </Typography>
        {renderDescription()}
        {renderLinks()}
      </GridContainer>
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

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
        {data.navBarLinks.map((item, index) => (
          <MyLink key={index} href={item[1]}>
            {item[0]}
          </MyLink>
        ))}
      </LinksBlock>
    );
  };

  const renderHomeHeader = () => (
    <OneBigColumn>
      <GridContainer $flexDirection="row">
        <Typography type="body" bold dark>
          Mateo Buitrago Jara
        </Typography>
        {renderLinks()}
      </GridContainer>
    </OneBigColumn>
  );

  const renderBackNavigation = () => (
    <OneBigColumn>
      <Typography type="body" bold dark>
        <Link href="/">← back</Link>
      </Typography>
    </OneBigColumn>
  );

  return (
    <header>
      <Divider />
      {renderHomeHeader()}
      <Divider />
      {isHome ? "" : renderBackNavigation()}
    </header>
  );
};

export default Header;

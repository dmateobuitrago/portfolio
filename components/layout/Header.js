import React from "react";
import GridBlock from "../atoms/GridBlock";
import Typography from "../atoms/Typography";
import Link from "next/link";
import MyLink from "../atoms/MyLink";
import GridContainer from "../atoms/GridContainer";
import Divider from "../atoms/Divider";
import { data } from "../../static/data/data.js";
import styled from 'styled-components';
import OneBigColumn from "./OneBigColumn";

const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  &::visited {
    color: red;
  }
`

class Header extends React.Component {
  constructor() {
    super();
    // this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  renderLinks() {
    let linksToRender = [];
    const links = data.links;

    links.map((item, index) => {
      linksToRender.push(
        <GridBlock key={index} col="4" colSmall="4" colMedium="4">
          <MyLink href={item[1]}>{item[0]}</MyLink>
        </GridBlock>
      );
    });
    return linksToRender;
  }

  renderDescription() {
    return (
      <Typography type="body" dark>
        I’m a product designer living in Barcelona. Currently
        working at Verse.
      </Typography>
    );
  }

  renderInfo() {
    return (
      <GridContainer>
        <GridBlock col="8" colMedium="4" pr>
          {this.renderDescription()}
        </GridBlock>
        <GridBlock col="8" colMedium="4" isGridContainer>
          {this.renderLinks()}
        </GridBlock>
      </GridContainer>
    );
  }

  render() {
    return (
        <OneBigColumn>
          <Divider  />
          <div>
            <Typography type="subtitle" bold dark>
              <Link href="/">
                <Anchor>{this.props.isHome ? "Mateo Buitrago Jara" : "← work"}</Anchor>
              </Link>
            </Typography>
          </div>
          {this.props.isHome ? this.renderInfo() : ""}
          <Divider />
        </OneBigColumn>
    );
  }
}

export default Header;

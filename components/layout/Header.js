import React from "react";
import GridBlock from "../atoms/GridBlock";
import Typography from "../atoms/Typography";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "../../theme/globalStyle";

const HeaderBlock = styled(GridBlock)`
  @media screen and (min-width: ${theme.minBreakPoints.large}) {
    position: fixed;
    z-index: 30;
  }
`;

const Logo = styled(Typography)`
  position: relative;
  z-index: 30;
`;

class Header extends React.Component {
  constructor() {
    super();
    // this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  renderDescription() {
    return (
      <Typography type="body" dark>
        I’m a Colombian designer and coder living in Barcelona.
      </Typography>
    );
  }

  render() {
    return (
      <HeaderBlock col="4" colLarge="1" padding>
        <Logo type="subtitle" bold dark={!this.props.open}>
          <Link href="/"><a>Mateo Buitrago</a></Link>
        </Logo>
        {this.props.showDescription ? this.renderDescription() : ""}
      </HeaderBlock>
    );
  }
}

export default Header;

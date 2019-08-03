import React from "react";
import GridBlock from "../atoms/GridBlock";
import Typography from "../atoms/Typography";
import Link from "next/link";
import styled from "styled-components";
import { theme } from '../../theme/globalStyle';

const HeaderBlock = styled(GridBlock)`
  @media screen and (min-width: ${theme.minBreakPoints.medium}){
    position: fixed;
  }
`

const Logo = styled(Typography)`
  position: relative;
  z-index: 30;
`;

class Header extends React.Component {
  constructor() {
    super();
    // this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }


  render() {
    return (
      <HeaderBlock col="4" colLarge="1" padding>
        <Link href="/">
          <Logo type="subtitle" bold dark={!this.props.open}>
            Mateo Buitrago
          </Logo>
        </Link>
        <Typography type="body" dark>
          I’m a Colombian designer and coder living in Barcelona.
        </Typography>
      </HeaderBlock>
    );
  }
}

export default Header;

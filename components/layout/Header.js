import React from "react";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";
import Typography from "../atoms/Typography";
import Menu from "../molecules/Menu";
import Link from "next/link";
import {theme} from '../../theme/globalStyle'
import styled from "styled-components";

const StyledHeader = styled(GridContainer)`
  @media screen and (min-width: ${theme.minBreakPoints.medium}){
    // position absolute;
    position relative;
    width: 100%;
    z-index: 12;
  }
`

const Logo = styled(Typography)`
  position: relative;
  z-index: 6;
`;

class Header extends React.Component {
  constructor() {
    super();
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  state = {
    menuOpen: false
  };

  handleMenuOpen(e) {
    event.preventDefault();
    console.log(this.state.menuOpen);
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <StyledHeader>
        <GridBlock col="2" colLarge="8" padding>
          <Link href="/">
            <Logo type="subtitle" bold dark={!this.state.menuOpen}>
              Mateo Buitrago
            </Logo>
          </Link>
          <Typography type="body" dark>
            I’m a Colombian designer and coder living in Barcelona.
          </Typography>
        </GridBlock>
        <GridBlock col="0" colLarge="8" />
        <GridBlock col="0" colLarge="8" />
        <GridBlock col="0" colLarge="8" />
        <GridBlock col="0" colLarge="8" />
        <GridBlock col="0" colLarge="8" />
        <GridBlock col="0" colMedium="4" colLarge="8" />
        <GridBlock col="2" colMedium="4" colLarge="8" padding>
          <Menu
            open={this.state.menuOpen}
            handleMenuClick={this.handleMenuOpen}
          />
        </GridBlock>
      </StyledHeader>
    );
  }
}

export default Header;

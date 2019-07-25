import React from "react";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";
import Typography from "../atoms/Typography";
import Menu from "../molecules/Menu";
import Link from "next/link";
import styled from "styled-components";

const Logo = styled(Typography)`
  position: relative;
  z-index: 2;
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
      <GridContainer>
        <GridBlock col="2" colLarge="8" padding>
          <Link href="/">
            <Logo type="subtitle" bold dark={!this.state.menuOpen}>
              Mateo Buitrago
            </Logo>
          </Link>
          <Typography type="body" dark>
            I’m a Colombian designer and technologist living in Barcelona.
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
      </GridContainer>
    );
  }
}

export default Header;

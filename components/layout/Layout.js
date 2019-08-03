import React from "react";
import MainMenu from "./MainMenu";
import Header from "./Header";
import { theme } from "../../theme/globalStyle";
import styled from "styled-components";

const StyledLayout = styled.div`
  background: ${theme.secondary};
`;

const Content = styled.div`
  position: relative;
`;

class Layout extends React.Component {
  constructor() {
    super();
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  state = {
    menuOpen: false
  };

  handleMenuOpen(e) {
    event.preventDefault();
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <StyledLayout>
        <Header open={this.state.menuOpen} showDescription={this.props.home}/>
        <MainMenu open={this.state.menuOpen} nuevafuncion={this.handleMenuOpen} />
        <Content>{this.props.children}</Content>
      </StyledLayout>
    );
  }
}

export default Layout;

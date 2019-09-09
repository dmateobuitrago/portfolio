import React from "react";
import MainMenu from "./MainMenu";
import Header from "./Header";
import Footer from "./Footer";
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
        <Header open={this.state.menuOpen} isHome={this.props.home}/>
        <Content>{this.props.children}</Content>
        <Footer></Footer>
      </StyledLayout>
    );
  }
}

export default Layout;

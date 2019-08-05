import React from "react";
import GridBlock from "../atoms/GridBlock";
import Menu from "../molecules/Menu";
import styled from "styled-components";
import { theme } from '../../theme/globalStyle';

const MenuBlock = styled(GridBlock)`
    position: absolute;
    right: 0;
    top: 0;
    z-index:20;
`;

class MainMenu extends React.Component {
  constructor() {
    super();
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  handleMenuOpen(e) {
    event.preventDefault();
    this.props.nuevafuncion();
  }

  render() {
    return (
      <MenuBlock col="4" colMedium="2" colLarge="1" padding>
        <Menu
          open={this.props.open}
          handleMenuClick={this.handleMenuOpen}
        />
      </MenuBlock>
    );
  }
}

export default MainMenu;

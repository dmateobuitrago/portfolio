import Link from "next/link";
import Typography from "../../components/atoms/Typography";
import { theme } from "../../theme/globalStyle";
import styled from "styled-components";

const Menu = styled.div`
  @media screen and (min-width: ${theme.minBreakPoints.large}) {
    .menuButton {
      display: none;
    }
  }
`;

const MenuItems = styled(Typography)`
  @media screen and (max-width: ${theme.maxBreakPoints.large}) {
    opacity: ${props => (props.open ? "1" : "0")};
    transition: opacity 0.2s ease 2s;
  }
`;

const Items = styled.div`
  @media screen and (max-width: ${theme.maxBreakPoints.large}) {
    display: flex;
    position: fixed;
    background: ${theme.primary};
    top: ${props => (props.open ? "0" : "-10%")};
    bottom: 0;
    right: 0;
    left: 0;
    z-index: ${props => (props.open ? "10" : "-10")};
    opacity: ${props => (props.open ? "1" : "0")};
    transition: all 0.2s ease-in;
    padding: 40% ${theme.baseUnit4};
    // display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 20;
  @media screen and (min-width: ${theme.minBreakPoints.large}) {
    display: none;
  }
`;

class MyMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  renderButton() {
    if (this.props.open) {
      return (
        <Typography type="subtitle" align="right">
          back →
        </Typography>
      );
    } else {
      return (
        <Typography type="subtitle" dark align="right">
          menu •••
        </Typography>
      );
    }
  }

  render() {
    return (
      <Menu>
        <MenuButton onClick={e => this.props.handleMenuClick(e)}>
          {this.renderButton()}
        </MenuButton>
        <Items open={this.props.open}>
          <MenuItems
            open={this.props.open}
            delay="1s"
            type={this.props.open ? "title" : "body"}
            bold={!this.props.open}
            dark={!this.props.open}
          >
            <Link href="/work">
              <a>work →</a>
            </Link>
          </MenuItems>
          <MenuItems
            open={this.props.open}
            delay="2s"
            type={this.props.open ? "title" : "body"}
            bold={!this.props.open}
            dark={!this.props.open}
          >
            <Link href="/about">
              <a>about →</a>
            </Link>
          </MenuItems>
          <MenuItems
            open={this.props.open}
            delay="3s"
            type={this.props.open ? "title" : "body"}
            bold={!this.props.open}
            dark={!this.props.open}
          >
            <Link href="https://www.instagram.com/buitragojara" target="_blank">
              <a>instagram ↗</a>
            </Link>
          </MenuItems>
          <MenuItems
            open={this.props.open}
            delay="4s"
            type={this.props.open ? "title" : "body"}
            bold={!this.props.open}
            dark={!this.props.open}
          >
            <Link href="https://dribbble.com/mateobuitrago" target="_blank">
              <a>dribbble ↗</a>
            </Link>
          </MenuItems>
        </Items>
      </Menu>
    );
  }
}

export default MyMenu;

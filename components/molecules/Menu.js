import Link from "next/link";
import Typography from "../../components/atoms/Typography";
import styled from "styled-components";

const Menu = styled.div`
  @media screen and (min-width: ${props => props.theme.minBreakPoints.large}) {
    .menuButton {
      display: none;
    }
  }
`;

const MenuItems = styled(Typography)`
  @media screen and (max-width: ${props => props.theme.maxBreakPoints.large}) {
    opacity: ${props => (props.open ? "1" : "0")};
    transition: opacity 0.2s ease 2s;
  }
`;

const Items = styled.div`
  @media screen and (max-width: ${props => props.theme.maxBreakPoints.large}) {
    position: fixed;
    background: ${props => props.theme.primary};
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    left: ${props => (props.open ? "0" : "4%")};
    opacity: ${props => (props.open ? '1' : "0")};
    visibility: ${props => (props.open ? 'visible' : "hidden")};
    transition: all 0.3s ease-in;
    padding: 40% ${props => props.theme.baseUnit4};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 20;
  @media screen and (min-width: ${props => props.theme.minBreakPoints.large}) {
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
            delay="2s"
            type={this.props.open ? "title" : "body"}
            bold={!this.props.open}
            dark={!this.props.open}
          >
            <Link href="/about">
              about →
            </Link>
          </MenuItems>
          <MenuItems
            open={this.props.open}
            delay="3s"
            type={this.props.open ? "title" : "body"}
            bold={!this.props.open}
            dark={!this.props.open}
          >
              <a href="https://www.instagram.com/buitragojara" target="_blank">instagram ↗</a>
          </MenuItems>
          <MenuItems
            open={this.props.open}
            delay="4s"
            type={this.props.open ? "title" : "body"}
            bold={!this.props.open}
            dark={!this.props.open}
          >
              <a href="https://www.instagram.com/buitragojara" target="_blank">dribbble ↗</a>
          </MenuItems>
        </Items>
      </Menu>
    );
  }
}

export default MyMenu;

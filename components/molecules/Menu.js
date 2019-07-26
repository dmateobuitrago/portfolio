import Link from "next/link";
import Typography from "../../components/atoms/Typography";
import { theme } from "../../theme/globalStyle";
import styled from "styled-components";

const Menu = styled.div`
  @media screen and (min-width: ${theme.minBreakPoints.medium}) {
    .menuButton {
      display: none;
    }
  }
`;

const Items = styled.div`
  @media screen and (max-width: ${theme.maxBreakPoints.medium}) {
    display: ${props => (props.open ? "flex" : "none")};
    position: absolute;
    background: ${theme.primary};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
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
  @media screen and (min-width: ${theme.minBreakPoints.medium}) {
    display: none;
  }
`;

class MyMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  renderButton() {
    if (this.props.open) {
      return <Typography type="subtitle" align="right">back →</Typography>;
    } else {
      return <Typography type="subtitle" dark align="right">menu •••</Typography>;
    }
  }

  render() {
    return (
      <Menu>
        <MenuButton onClick={e => this.props.handleMenuClick(e)}>
          {this.renderButton()}
        </MenuButton>
        <Items open={this.props.open}>
          <Typography type={this.props.open ? "title" : "body"} bold={!this.props.open} dark={!this.props.open}>
            <Link href="/work">work →</Link>
          </Typography>
          <Typography type={this.props.open ? "title" : "body"}  bold={!this.props.open} dark={!this.props.open}>
            <Link href="/about">about →</Link>
          </Typography>
          <Typography type={this.props.open ? "title" : "body"}  bold={!this.props.open} dark={!this.props.open}>
            <Link href="https://www.instagram.com/buitragojara" target="_blank">
              instagram ↗
            </Link>
          </Typography>
          <Typography type={this.props.open ? "title" : "body"}  bold={!this.props.open} dark={!this.props.open}>
            <Link href="https://dribbble.com/mateobuitrago" target="_blank">
              dribbble ↗
            </Link>
          </Typography>
        </Items>
      </Menu>
    );
  }
}

export default MyMenu;

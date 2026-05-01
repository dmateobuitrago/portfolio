import React from "react";
import styled from "styled-components";
import GridBlock from "../atoms/GridBlock";
import Typography from "../atoms/Typography";
import OneBigColumn from "./OneBigColumn";
import Divider from "../atoms/Divider";
import { data } from "../../static/data/data.js";
import Link from "next/link";
import MyLink from "../atoms/MyLink";

const FooterBlock = styled.div`
  padding-top: ${(props) => props.theme.baseUnit4};
  padding-bottom: ${(props) => props.theme.baseUnit4};
`;

const LinksBlock = styled(GridBlock)`
  align-items: flex-end;
  gap: ${(props) => props.theme.baseUnit2};
`;

const renderLinks = () => {
  return (
    <LinksBlock isGridContainer pt pb>
      {data.footerLinks.map((item, index) => (
        <MyLink key={index} href={item[1]}>
          {item[0]}
        </MyLink>
      ))}
    </LinksBlock>
  );
};

class Footer extends React.Component {
  render() {
    return (
      <OneBigColumn>
        <FooterBlock>
          <Typography type="small" dark mb="0">
            ®{new Date().getFullYear()}
          </Typography>
          {renderLinks()}
        </FooterBlock>
        <Divider size="small" />
      </OneBigColumn>
    );
  }
}

export default Footer;

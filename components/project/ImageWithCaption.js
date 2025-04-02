import React from "react";
import Typography from "../atoms/Typography";
import GridBlock from "../atoms/GridBlock";
import OneBigColumn from "../layout/OneBigColumn";
import styled from "styled-components";

const imgPath = "/static/images/";

const Arrow = styled(Typography)`
  &::before {
    content: "↑";
  }
  @media screen and (min-width: ${(props) =>
      props.theme.minBreakPoints.medium}) {
    &::before {
      content: "←";
    }
  }
`;

const CaptionContainer = styled(GridBlock)`
  flex-direction: column;
  justify-content: end;
  padding-top: ${(props) => props.theme.baseUnit2};
  @media screen and (min-width : ${props => props.theme.minBreakPoints.medium}){
    padding-inline: ${(props) => props.theme.baseUnit2};
  }
`;

class ImageWithCaption extends React.Component {
  renderArrow() {
    if (this.props.body) {
      return <Arrow type="body" dark mb="0" />;
    }
  }

  getImageColumn(){
    if (this.props.layout == "half"){
      return "4"
    }
    return "6"
  }

  getCaptionColumn(){
    if (this.props.layout == "half"){
      return "4"
    }
    return "2"
  }

  render() {
    return (
      <OneBigColumn>
        <GridBlock col="8" colMedium={this.getImageColumn()}>
          <img src={imgPath + this.props.image} />
        </GridBlock>
        <CaptionContainer col="8" colMedium={this.getCaptionColumn()} isGridContainer>
          {this.renderArrow()}
          <Typography type="small" dark mb="0">
            {this.props.body}
          </Typography>
        </CaptionContainer>
      </OneBigColumn>
    );
  }
}

export default ImageWithCaption;

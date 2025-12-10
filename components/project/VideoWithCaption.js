import React from "react";
import Typography from "../atoms/Typography";
import GridBlock from "../atoms/GridBlock";
import OneBigColumn from "../layout/OneBigColumn";
import styled from "styled-components";

const imgPath = "/static/images/";

const MyVideo = styled.video`
  max-width: 100%;
  max-height: 520px;
`;

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
  @media screen and (min-width: ${(props) =>
      props.theme.minBreakPoints.medium}) {
    padding-inline: ${(props) => props.theme.baseUnit2};
  }
`;

class VideoWithCaption extends React.Component {
  renderArrow() {
    if (this.props.body) {
      return <Arrow type="body" dark mb="0" />;
    }
  }

  render() {
    return (
      <OneBigColumn>
        <GridBlock col="8" colMedium="6">
          <MyVideo src={imgPath + this.props.video} controls></MyVideo>
        </GridBlock>
        <CaptionContainer col="8" colMedium="2" isGridContainer>
          {this.renderArrow()}
          <Typography type="small" dark mb="0">
            {this.props.body}
          </Typography>
        </CaptionContainer>
      </OneBigColumn>
    );
  }
}

export default VideoWithCaption;

import React from "react";
import Typography from "../atoms/Typography";
import GridBlock from "../atoms/GridBlock";
import OneBigColumn from "../layout/OneBigColumn";
import styled from "styled-components";

const imgPath = "/static/images/";

const MyVideo = styled.video` 
  max-width: 100%;
`

const Arrow = styled(Typography)`
  ::before {
    content: "↑";
  }
  @media screen and (min-width: ${props => props.theme.minBreakPoints.medium}) {
    &::before {
      content: "←";
    }
  }
`;


const GridBlockJustifyEnd = styled(GridBlock)`
  flex-direction: column;
  justify-content: end;
`;

class VideoWithCaption extends React.Component {
  render() {
    return (
      <OneBigColumn reverse>
        <GridBlock col="8" colMedium="6" padding>
          <MyVideo src={imgPath + this.props.video} controls></MyVideo>
        </GridBlock>
        <GridBlockJustifyEnd col="8" colMedium="2" padding isGridContainer>
          <Arrow type="body" dark mb="0" />
          <Typography type="small" dark mb="0">
            {this.props.body}
          </Typography>
        </GridBlockJustifyEnd>
      </OneBigColumn>
    );
  }
}

export default VideoWithCaption;

import React from "react";
import Typography from "../atoms/Typography";
import GridBlock from "../atoms/GridBlock";
import OneBigColumn from "../layout/OneBigColumn";
import styled from "styled-components";

const imgPath = "/static/images/";

const Arrow = styled(Typography)`
  ::before {
    content: "↑";
  }
  @media screen and (min-width: ${props => props.theme.minBreakPoints.medium}) {
    &::before {
      content: "→";
    }
  }
`;

class ImageWithCaption extends React.Component {
  render() {
    return (
      <OneBigColumn reverse>
        <GridBlock col="8" colMedium="2" padding>
          <Arrow type="body" dark mb="0" />
          <Typography type="small" dark mb="0">
            {this.props.body}
          </Typography>
        </GridBlock>
        <GridBlock col="8" colMedium="6" padding>
          <img src={imgPath + this.props.image} />
        </GridBlock>
      </OneBigColumn>
    );
  }
}

export default ImageWithCaption;

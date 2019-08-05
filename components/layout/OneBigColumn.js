import React from "react";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";
import { theme } from '../../theme/globalStyle';
import styled from 'styled-components';

const ReverseGridContainter = styled(GridContainer)`
  @media screen and (max-width: ${theme.maxBreakPoints.medium}){
    flex-direction: column-reverse;
  }
`;

class OneBigColumn extends React.Component {
  renderContent(){
    let content;
    if(this.props.reverse){
      content=<ReverseGridContainter>{this.props.children}</ReverseGridContainter>
    } else {
      content=<GridContainer>{this.props.children}</GridContainer>
    }

    return content;
  }
  render() {
    return (
      <GridContainer>
        <GridBlock col="0" colMedium="1" />
        <GridBlock col="8" colMedium="6">
          {this.renderContent()}
        </GridBlock>
        <GridBlock col="0" colMedium="1" />
      </GridContainer>
    );
  }
}

export default OneBigColumn;

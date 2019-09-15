import React from "react";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";
import styled from 'styled-components';

const ReverseGridContainter = styled(GridContainer)`
  @media screen and (max-width: ${props => props.theme.maxBreakPoints.medium}){
    flex-direction: column-reverse;
  }
`;

const BigColum = styled(GridContainer)`
  max-width: ${props => props.theme.maxBreakPoints.xLarge};
  margin: 0 auto;
`

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
      <BigColum>
        <GridBlock col="0" colMedium="1" colXlarge="0" />
        <GridBlock col="8" colMedium="6" colXlarge="8">
          {this.renderContent()}
        </GridBlock>
        <GridBlock col="0" colMedium="1" colXlarge="0" />
      </BigColum>
    );
  }
}

export default OneBigColumn;

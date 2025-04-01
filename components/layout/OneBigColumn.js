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
  @media screen and (max-width: ${props => props.theme.maxBreakPoints.small}){
    padding: ${props => props.theme.baseUnit};
  }
  @media screen and (max-width: ${props => props.theme.maxBreakPoints.medium}){
    padding: ${props => props.theme.baseUnit2};
  }
  @media screen and (max-width: ${props => props.theme.maxBreakPoints.large}){
    padding: ${props => props.theme.baseUnit4};
  }
  @media screen and (max-width: ${props => props.theme.maxBreakPoints.xLarge}){
    padding: ${props => props.theme.baseUnit4};
  }
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
        <GridBlock col="0" />
        <GridBlock col="8">
          {this.renderContent()}
        </GridBlock>
        <GridBlock col="0"/>
      </BigColum>
    );
  }
}

export default OneBigColumn;

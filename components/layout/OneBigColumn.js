import React from "react";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";
import styled from "styled-components";

const ReverseGridContainter = styled(GridContainer)`
  @media screen and (max-width: ${(props) =>
      props.theme.maxBreakPoints.medium}) {
    flex-direction: column-reverse;
  }
`;

const BigColumn = styled(GridContainer)`
  width: 100%;
  max-width: ${(props) => props.theme.maxBreakPoints.large};
  @media screen and (max-width: ${(props) =>
      props.theme.maxBreakPoints.large}) {
    padding: ${(props) => props.theme.baseUnit2};
  }
  margin: 0 auto;
`;

class OneBigColumn extends React.Component {
  renderContent() {
    let content;
    if (this.props.reverse) {
      content = (
        <ReverseGridContainter>{this.props.children}</ReverseGridContainter>
      );
    } else {
      content = (
        <GridContainer $gap={this.props.gap}>
          {this.props.children}
        </GridContainer>
      );
    }

    return content;
  }
  render() {
    return (
      <BigColumn className={this.props.className}>
        {this.renderContent()}
      </BigColumn>
    );
  }
}

export default OneBigColumn;

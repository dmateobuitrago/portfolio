import React from "react";
import styled from "styled-components";

const Block = styled.div`
  box-sizing: border-box;

  ${(props) =>
    props.$padding &&
    `
        padding: ${props.theme.baseUnit2};
    `}

  ${(props) =>
    props.$pt &&
    `
        padding-top: ${props.theme.baseUnit2};
    `}
    ${(props) =>
    props.$pr &&
    `
        padding-right: ${props.theme.baseUnit2};
    `}
    ${(props) =>
    props.$pb &&
    `
        padding-bottom: ${props.theme.baseUnit2};
    `}
    ${(props) =>
    props.$pl &&
    `
        padding-left: ${props.theme.baseUnit2};
    `}
    ${(props) =>
    props.$gap &&
    `
        gap: ${props.theme.baseUnit2};
    `}
    ${(props) =>
    props.$isGridContainer &&
    `
        display:flex;
        flex-wrap:wrap;
    `}

    ${(props) =>
    props.$fullWidth &&
    `
        width: 100%;
    `}

    ${(props) =>
    props.col &&
    !props.$fullWidth &&
    `
        width: ${(props) => (100 * props.$col) / props.theme.grid}%;
    `}
    
    @media screen and (min-width: ${(props) =>
    props.theme.minBreakPoints.small}) {
    ${(props) =>
      props.$colSmall &&
      !props.$fullWidth &&
      `
            width: ${(100 * props.$colSmall) / props.theme.grid + "%"};
        `}
  }
  @media screen and (min-width: ${(props) =>
      props.theme.minBreakPoints.medium}) {
    ${(props) =>
      props.$colMedium &&
      !props.$fullWidth &&
      `
            width: ${(100 * props.$colMedium) / props.theme.grid + "%"};
        `}
  }
  @media screen and (min-width: ${(props) =>
      props.theme.minBreakPoints.large}) {
    ${(props) =>
      props.$colLarge &&
      !props.$fullWidth &&
      `
            width: ${(100 * props.$colLarge) / props.theme.grid + "%"};
        `}
  }
  @media screen and (min-width: ${(props) =>
      props.theme.minBreakPoints.xlarge}) {
    ${(props) =>
      props.$colXlarge &&
      !props.$fullWidth &&
      `
            width: ${(100 * props.$colXlarge) / props.theme.grid + "%"};
        `}
  }
`;

class GridBlock extends React.Component {
  render() {
    return (
      <Block
        className={this.props.className}
        $col={this.props.col}
        $colSmall={this.props.colSmall}
        $colMedium={this.props.colMedium}
        $colLarge={this.props.colLarge}
        $colXlarge={this.props.colXlarge}
        $padding={this.props.padding}
        $pt={this.props.pt}
        $pr={this.props.pr}
        $pb={this.props.pb}
        $pl={this.props.pl}
        $gap={this.props.gap}
        $isGridContainer={this.props.isGridContainer}
        $fullWidth={this.props.fullWidth}
      >
        {this.props.children}
      </Block>
    );
  }
}

export default GridBlock;

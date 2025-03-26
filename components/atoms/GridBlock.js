import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
    box-sizing: border-box;
    
    ${props => props.$padding && `
        padding: ${props.theme.baseUnit};
    `}

    ${props => props.$pt && `
        padding-top: ${props.theme.baseUnit};
    `}
    ${props => props.$pr && `
        padding-right: ${props.theme.baseUnit};
    `}
    ${props => props.$pb  && `
        padding-bottom: ${props.theme.baseUnit};
    `}
    ${props => props.$pl && `
        padding-left: ${props.theme.baseUnit};
    `}
    ${props => props.$isGridContainer && `
        display:flex;
        flex-wrap:wrap;
    `}
    
    width: ${props => 100*props.$col/props.theme.grid}%;
    @media screen and (min-width: ${props => props.theme.minBreakPoints.small}){
        ${props => props.$colSmall && `
            width: ${100*props.$colSmall/props.theme.grid + '%'};
        `}
    }
    @media screen and (min-width: ${props => props.theme.minBreakPoints.medium}){
        ${props => props.$colMedium && `
            width: ${100*props.$colMedium/props.theme.grid + '%'};
        `}
    }
    @media screen and (min-width: ${props => props.theme.minBreakPoints.large}){
        ${props => props.colLarge && `
            width: ${100*props.$colLarge/props.theme.grid + '%'};
        `}
    }
    @media screen and (min-width: ${props => props.theme.minBreakPoints.xlarge}){
        ${props => props.$colXlarge && `
            width: ${100*props.$colXlarge/props.theme.grid + '%'};
        `}
    }
`;

class GridBlock extends React.Component {
    render(){
        return <Block
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
                    $isGridContainer={this.props.isGridContainer}
                >
                    {this.props.children}
                </Block>
    }
}

export default GridBlock;
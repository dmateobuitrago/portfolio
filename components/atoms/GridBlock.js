import React from 'react';
import { theme } from '../../theme/globalStyle';
import styled from 'styled-components';

const Block = styled.div`
    box-sizing: border-box;
    padding: ${props => props.padding ? theme.baseUnit : 0};

    ${props => props.pt && `
        padding-top: ${theme.baseUnit};
    `}
    ${props => props.pr && `
        padding-right: ${theme.baseUnit};
    `}
    ${props => props.pb  && `
        padding-bottom: ${theme.baseUnit};
    `}
    ${props => props.pl && `
        padding-left: ${theme.baseUnit};
    `}
    ${props => props.isGridContainer && `
        display:flex;
        flex-wrap:wrap;
    `}
    
    width: ${props => 100*props.col/theme.grid}%;
    @media screen and (min-width: ${theme.minBreakPoints.small}){
        ${({ colSmall }) => colSmall && `
            width: ${(100*colSmall/theme.grid)+'%'};
        `}
    }
    @media screen and (min-width: ${theme.minBreakPoints.medium}){
        ${({ colMedium }) => colMedium && `
            width: ${(100*colMedium/theme.grid)+'%'};
        `}
    }
    @media screen and (min-width: ${theme.minBreakPoints.large}){
        ${({ colLarge }) => colLarge && `
            width: ${(100*colLarge/theme.grid)+'%'};
        `}
    }
`;

class GridBlock extends React.Component {
    render(){
        return <Block
                    className={this.props.className}
                    col={this.props.col}
                    colSmall={this.props.colSmall}
                    colMedium={this.props.colMedium}
                    colLarge={this.props.colLarge}
                    padding={this.props.padding}
                    pt={this.props.pt}
                    pr={this.props.pr}
                    pb={this.props.pb}
                    pl={this.props.pl}
                    isGridContainer={this.props.isGridContainer}
                >
                    {this.props.children}
                </Block>
    }
}

export default GridBlock;
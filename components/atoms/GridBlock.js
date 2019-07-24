import React from 'react';
import { theme } from '../../theme/globalStyle';
import styled from 'styled-components';

const Block = styled.div`
    padding: ${theme.baseUnit};
    width: ${props => 100/props.col}%;
    @media screen and (min-width: ${theme.breakPoints.small}){
        width: ${props => 100/props.colSmall}%;
    }
    @media screen and (min-width: ${theme.breakPoints.medium}){
        width: ${props => 100/props.colMedium}%;
    }
    @media screen and (min-width: ${theme.breakPoints.large}){
        width: ${props => 100/props.colLarge}%;
    }
`;

class GridBlock extends React.Component {
    render(){
        return <Block
                    col={this.props.col}
                    colSmall={this.props.colSmall}
                    colMedium={this.props.colMedium}
                    colLarge={this.props.colLarge}
                >
                    {this.props.children}
                </Block>
    }
}

export default GridBlock;
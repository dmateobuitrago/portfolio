import React from "react";
import Header from './Header';
import { theme } from '../../theme/globalStyle';
import styled from 'styled-components';

const StyledLayout = styled.div`
    background: ${theme.secondary}
`;

const Content = styled.div`
    position:relative;
    z-index: 2;
`

class Layout extends React.Component {
    constructor() {
      super();
    }

    render(){
        return(
            <StyledLayout>
                <Header></Header>
                <Content>
                    {this.props.children}
                </Content>
            </StyledLayout>
        )
    }
}

export default Layout;
import React from "react";
import Header from './Header';
import { theme } from '../../theme/globalStyle';
import styled from 'styled-components';

const StyledLayout = styled.div`
    background: ${theme.secondary}
`;

class Layout extends React.Component {
    constructor() {
      super();
    }

    render(){
        return(
            <StyledLayout>
                <Header></Header>
                <div className="content">
                    {this.props.children}
                </div>
            </StyledLayout>
        )
    }
}

export default Layout;
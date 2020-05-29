import React from 'react';
import styled from 'styled-components';
import Typography from '../atoms/Typography';
import OneBigColumn from "./OneBigColumn";

const FooterBlock = styled.div`
    padding: ${props => props.theme.baseUnit}
`

class Footer extends React.Component{
    render(){
        return(
            <OneBigColumn>
                <FooterBlock>
                    <Typography type="small" dark mb="0">®{new Date().getFullYear()}</Typography>
                </FooterBlock>
            </OneBigColumn>
        )
    }
}

export default Footer;
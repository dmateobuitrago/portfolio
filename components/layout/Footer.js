import React from 'react';
import styled from 'styled-components';
import Typography from '../atoms/Typography';

const FooterBlock = styled.div`
    padding: ${props => props.theme.baseUnit}
`

class Footer extends React.Component{
    render(){
        return(
            <FooterBlock>
                <Typography type="small" dark mb="0">®2019</Typography>
            </FooterBlock>
        )
    }
}

export default Footer;
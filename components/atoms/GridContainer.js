import styled from 'styled-components';

const GridContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    ${props => props.flexDirection && `
        flex-direction: ${props.flexDirection};
    `}

     ${props => props.gap && `
        gap: ${props.theme.baseUnit2};
    `}

    img {
        max-width: 100%;
    }
    
    
`;


export default (props) => <GridContainer className={props.className} flexDirection={props.flexDirection} gap={props.gap}>{props.children}</GridContainer>
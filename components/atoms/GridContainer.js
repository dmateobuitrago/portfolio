import styled from 'styled-components';

const GridContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    ${props => props.reverse && `
        flex-direction: column-reverse;
    `}

     ${props => props.gap && `
        gap: ${props.theme.baseUnit2};
    `}

    img {
        max-width: 100%;
    }
    
    
`;


export default (props) => <GridContainer className={props.className} reverse={props.reverse} gap={props.gap}>{props.children}</GridContainer>
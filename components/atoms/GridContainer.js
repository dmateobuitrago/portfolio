import styled from 'styled-components';

const GridContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    ${props => props.reverse && `
        flex-direction: column-reverse;
    `}

    img {
        max-width: 100%;
    }
`;


export default (props) => <GridContainer className={props.className} reverse={props.reverse}>{props.children}</GridContainer>
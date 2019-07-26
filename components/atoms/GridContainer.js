import styled from 'styled-components';

const GridContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
`;


export default (props) => <GridContainer className={props.className}>{props.children}</GridContainer>
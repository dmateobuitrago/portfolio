import styled from 'styled-components';

const Divider = styled.div`
    height: ${props => props.theme.baseUnit4};
    width:100%;
    @media screen and (min-width: ${props => props.theme.minBreakPoints.small}){
        height: ${props => props.theme.baseUnit12}
    }
`;


export default (props) => <Divider className={props.className}></Divider>
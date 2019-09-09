import styled from 'styled-components';
import { theme } from '../../theme/globalStyle';

const Divider = styled.div`
    height: ${theme.baseUnit4}
    @media screen and (min-width: ${theme.minBreakPoints.small}){
        height: ${theme.baseUnit12}
    }
`;


export default (props) => <Divider className={props.className}></Divider>
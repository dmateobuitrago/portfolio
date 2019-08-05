import styled from 'styled-components';
import { theme } from '../../theme/globalStyle';

const Divider = styled.div`
    height: ${theme.baseUnit12}
`;


export default (props) => <Divider className={props.className}></Divider>
import styled from 'styled-components';
import Typography from '../atoms/Typography';
import {theme} from '../../theme/globalStyle'

const StyledTag = styled(Typography)`
    background: white;
    display: inline-block;
    border: 1px solid ${theme.primary};
    padding: ${theme.baseUnitHalf}
`;


export default (props) => <StyledTag type="small" dark>{props.children}</StyledTag>
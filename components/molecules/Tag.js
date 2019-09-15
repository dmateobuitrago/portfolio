import styled from 'styled-components';
import Typography from '../atoms/Typography';

const StyledTag = styled(Typography)`
    background: white;
    display: inline-block;
    border: 1px solid ${props => props.theme.primary};
    padding: ${props => props.theme.baseUnitHalf}
`;


export default (props) => <StyledTag type="small" dark>{props.children}</StyledTag>
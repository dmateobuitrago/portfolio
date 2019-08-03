import Typography from "../atoms/Typography";
import styled from 'styled-components';

const Label = styled(Typography)`
  opacity: 0.7
`

export default props => (
  <div>
    <Label type="small" dark mb="0">
      {props.name}
    </Label>
    <Typography type="body" dark>
      {props.value}
    </Typography>
  </div>
);

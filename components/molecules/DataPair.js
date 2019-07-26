import Typography from "../atoms/Typography";

export default props => (
  <div>
    <Typography type="small" dark>
      {props.name}
    </Typography>
    <Typography type="body" dark>
      {props.value}
    </Typography>
  </div>
);

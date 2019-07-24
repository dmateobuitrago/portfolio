import Typography from '../components/atoms/Typography';
import GridContainer from '../components/atoms/GridContainer';
import GridBlock from '../components/atoms/GridBlock';

function Index() {
  return (
    <div>
      <GridContainer>
        <GridBlock col='1' colSmall='2' colMedium='4' colMedium='8'>
          <Typography type="title" bold dark>Welcome === to next.js!</Typography>
        </GridBlock>
        <GridBlock col='2' colSmall='4' colMedium='2' colMedium='4'>
          <Typography type="body">Welcome === to next.js!</Typography>
        </GridBlock>
      </GridContainer>
    </div>
  )
}

export default Index;
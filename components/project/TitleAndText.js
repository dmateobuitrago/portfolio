import React from 'react';
import Typography from '../atoms/Typography';
import OneBigColumn from '../layout/OneBigColumn';
import GridBlock from '../atoms/GridBlock';


class TitleAndText extends React.Component{
    render(){
        return(
            <OneBigColumn>
                <GridBlock col="0" colMedium="2"></GridBlock>
                <GridBlock col="8" colMedium="6" padding >
                    <Typography type="subtitle" dark>{this.props.title}</Typography>
                </GridBlock>
                <GridBlock col="0" colMedium="2"></GridBlock>
                <GridBlock col="8" colMedium="6" padding>
                    <Typography type="body" dark>{this.props.body}</Typography>
                </GridBlock>
            </OneBigColumn>
        )
    }
}

export default TitleAndText
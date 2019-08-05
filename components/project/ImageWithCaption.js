import React from 'react';
import Typography from '../atoms/Typography';
import GridBlock from '../atoms/GridBlock';
import OneBigColumn from '../layout/OneBigColumn'

const imgPath = "/static/images/";


class ImageWithCaption extends React.Component{
    render(){
        return(
            <OneBigColumn reverse>
                <GridBlock col="8" colMedium="2" padding>
                    <Typography type="body" dark mb="0">→</Typography>
                    <Typography type="small" dark mb="0">{this.props.body}</Typography>
                </GridBlock>
                <GridBlock col="8" colMedium="6" padding>
                    <img src={imgPath + "juan/hero.png"} />
                </GridBlock>
            </OneBigColumn>
        )
    }
}

export default ImageWithCaption;
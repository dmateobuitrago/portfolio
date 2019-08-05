import React from 'react';
import Typography from '../atoms/Typography';
import GridBlock from '../atoms/GridBlock';
import GridContainer from '../atoms/GridContainer';
import { theme } from "../../theme/globalStyle";
import styled from "styled-components";

const imgPath = "/static/images/";

const Image = styled.img`
  margin-bottom: ${theme.baseUnit2};
  height: calc(100vh - 20px);
  position: sticky;
  top:10px;
`;

const AlignCenterBlock = styled(GridBlock)`
    display: flex;
    flex-direction:column;
    justify-content: center;
`


class ImageAndTextAside extends React.Component{
    render(){
        return(
            <GridContainer>
                <GridBlock col="8" colMedium="4" padding>
                    <Image src={imgPath + "juan/hero.png"} />
                </GridBlock>
                <AlignCenterBlock col="8" colMedium="4">
                    <Typography type="subtitle" dark>{this.props.title}</Typography>
                    <Typography type="body" dark>{this.props.body}</Typography>
                </AlignCenterBlock>
            </GridContainer>
        )
    }
}

export default ImageAndTextAside;
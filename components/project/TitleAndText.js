import React from 'react';
import Typography from '../atoms/Typography';
import OneBigColumn from '../layout/OneBigColumn';
import GridBlock from '../atoms/GridBlock';
import Divider from "../atoms/Divider";


class TitleAndText extends React.Component{

    renderList(listItems){
        let renderElement = []
        listItems.map((listItem,index) => {
            renderElement.push(<Typography key={index} type="body" dark>* {listItem}</Typography>)
        });
        return renderElement;
    }

    renderContent(content){
        let renderElement = []
        content.map((item,index) => {
          let type = item.type;
    
          switch (type) {
            case "body":
              renderElement.push( <Typography key={index} type="body" dark>{item.text}</Typography>);
              break;
            case "list":
              renderElement.push( this.renderList(item.list));
              break;
            }
        });
    
        return renderElement;
    }

    render(){
        return(
            <OneBigColumn>
                <GridBlock col="0" colMedium="2"></GridBlock>
                <GridBlock col="8" colMedium="6" padding>
                    <Typography type="huge" dark>{this.props.title}</Typography>
                </GridBlock>
                <GridBlock col="0" colMedium="2"></GridBlock>
                <GridBlock col="8" colMedium="6" padding>
                    {this.renderContent(this.props.body)}
                </GridBlock>
            </OneBigColumn>
        )
    }
}

export default TitleAndText
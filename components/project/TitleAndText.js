import React from 'react';
import Typography from '../atoms/Typography';
import OneBigColumn from '../layout/OneBigColumn';
import GridBlock from '../atoms/GridBlock';
import styled from "styled-components";

const QuoteContainer = styled(GridBlock)`
    background: ${props => props.theme.background1};
    border-radius: ${props => props.theme.baseUnitHalf};
`

class TitleAndText extends React.Component {

    renderList(listItems) {
        return listItems.map((listItem, index) => (
            <Typography key={index} type="body" dark>
                * {listItem}
            </Typography>
        ));
    }

    renderContent(content) {
        if (!content) return;

        return content.map((item, index) => {
            switch (item.type) {
                case "body":
                    return (
                        <GridBlock>
                            <Typography key={index} type="body" dark>
                                {item.text}
                            </Typography>
                        </GridBlock>
                    );
                case "list":
                    return (
                        <GridBlock key={index}>
                            {this.renderList(item.list)}
                        </GridBlock>
                    );
                case "quote":
                    return (
                        <QuoteContainer padding>
                            <Typography key={index} type="subtitle" dark italic>
                                “{item.text}”
                            </Typography>
                        </QuoteContainer>
                    );
                default:
                    return null;
            }
        });
    }

    render() {
        return (
            <OneBigColumn>
                <GridBlock col="8" colMedium="6" pt pr pl>
                    <Typography type="subtitle" dark bold>
                        {this.props.title}
                    </Typography>
                </GridBlock>
                <GridBlock isGridContainer col="8" colMedium="6" pl pr pb gap>
                    {this.renderContent(this.props.body)}
                </GridBlock>
                <GridBlock col="0" colMedium="2"></GridBlock>
            </OneBigColumn>
        );
    }
}

export default TitleAndText;

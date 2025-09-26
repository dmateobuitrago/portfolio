import React from 'react';
import Typography from '../atoms/Typography';
import OneBigColumn from '../layout/OneBigColumn';
import GridBlock from '../atoms/GridBlock';
import styled from "styled-components";

const QuoteContainer = styled(GridBlock)`
    background: #ffffff;
    border-radius: ${props => props.theme.baseUnitHalf};
    border: 1px solid ${props => props.theme.border};
`


class ImpactCallOut extends React.Component {

    renderContent(content) {
        if (!content) return;

        return content.map((item, index) => {
            return (
                <QuoteContainer padding>
                    <Typography key={index} type="subtitle" dark>
                        {item.top_content}
                    </Typography>
                    <Typography key={index} type="body" dark>
                        {item.bottom_content}
                    </Typography>
                </QuoteContainer>
            );
        });
    }

    render() {
        return (
            <OneBigColumn>
                <GridBlock col="8" colMedium="6" pb>
                    <Typography type="subtitle" dark bold>
                        {this.props.title}
                    </Typography>
                    <Typography type="body" dark>
                        {this.props.subtitle}
                    </Typography>
                </GridBlock>
                <GridBlock isGridContainer col="8" colMedium="6" gap>
                    {this.renderContent(this.props.body)}
                </GridBlock>
            </OneBigColumn>
        );
    }
}

export default ImpactCallOut;

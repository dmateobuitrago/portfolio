import React from "react";
import Typography from "../../components/atoms/Typography";
import DataPair from "../molecules/DataPair";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";
import OneBigColumn from "../layout/OneBigColumn"
import { theme } from "../../theme/globalStyle";
import styled from "styled-components";

const imgPath = "/static/images/";

const Image = styled.img`
  margin-bottom: ${theme.baseUnit2};
`;

const SummaryContainer = styled(GridContainer)`
  > div:nth-child(odd) {
    padding-right: ${theme.baseUnit};
  }
  > div:nth-child(even) {
    padding-left: ${theme.baseUnit};
  }
`;

class ProjectIntro extends React.Component {
  renderSummary() {
    let summary = [];
    const s = this.props.summary;
    for (let key in this.props.summary) {
      if (s.hasOwnProperty(key)) {
        summary.push(
          <GridBlock key={key} col="4" colSmall="4" colMedium="4">
            <DataPair name={key} value={s[key]} />
          </GridBlock>
        );
      }
    }
    return summary;
  }

  render() {
    return (
          <OneBigColumn>
            <GridBlock col="8" padding>
              <Image src={imgPath + this.props.image} />
              <Typography type="title" dark bold>
                {this.props.title}
              </Typography>
              <Typography type="subtitle" dark>
                {this.props.tagline}
              </Typography>
            </GridBlock>
            <GridContainer>
              <GridBlock col="8" colSmall="8" colMedium="4" padding>
                <DataPair name="tl;dr" value={this.props.tldr} />
              </GridBlock>
              <GridBlock col="8" colSmall="8" colMedium="4" padding>
                <SummaryContainer>{this.renderSummary()}</SummaryContainer>
              </GridBlock>
            </GridContainer>
          </OneBigColumn>
    );
  }
}

export default ProjectIntro;

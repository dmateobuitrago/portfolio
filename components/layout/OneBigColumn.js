import React from "react";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";

class OneBigColumn extends React.Component {
  render() {
    return (
      <GridContainer>
        <GridBlock col="0" colMedium="1" />
        <GridBlock col="8" colMedium="6">
          <GridContainer>{this.props.children}</GridContainer>
        </GridBlock>
        <GridBlock col="0" colMedium="1" />
      </GridContainer>
    );
  }
}

export default OneBigColumn;

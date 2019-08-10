import React from "react";
import OneBigColumn from "../layout/OneBigColumn";

const imgPath = "/static/images/";

class BigImage extends React.Component {
  render() {
    return (
      <OneBigColumn reverse>
          <img src={imgPath + this.props.image} />
      </OneBigColumn>
    );
  }
}

export default BigImage;

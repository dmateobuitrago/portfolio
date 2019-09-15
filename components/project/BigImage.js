import React from "react";
import OneBigColumn from "../layout/OneBigColumn";
import styled from 'styled-components';

const imgPath = "/static/images/";

const MyImg = styled.img`
  margin: 0 auto;
`

class BigImage extends React.Component {
  render() {
    return (
      <OneBigColumn reverse>
          <MyImg src={imgPath + this.props.image} />
      </OneBigColumn>
    );
  }
}

export default BigImage;

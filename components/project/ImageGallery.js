import React from "react";
import OneBigColumn from "../layout/OneBigColumn";
import styled from "styled-components";
import GridBlock from "../atoms/GridBlock";

const imgPath = "/static/images/";

const MyImg = styled.img`
  margin: 0 auto;
`;

class ImageGallery extends React.Component {
  renderImages(images, columns) {
    return images.map((image, index) => (
      <GridBlock key={index} col="8" colMedium={columns} padding>
        <MyImg src={imgPath + image} />
      </GridBlock>
    ));
  }

  render() {
    return (
      <OneBigColumn>
        {this.renderImages(this.props.images, this.props.columns)}
      </OneBigColumn>
    );
  }
}

export default ImageGallery;

import React from "react";
import OneBigColumn from "../layout/OneBigColumn";
import styled, { useTheme } from "styled-components";
import GridBlock from "../atoms/GridBlock";

const imgPath = "/static/images/";

const MyImg = styled.img`
  margin: 0 auto;
`;

const ImageGallery = ({ images, columns }) => {
  const theme = useTheme();
  const grid = theme.grid;
  const numberOfColumns = grid / columns;

  const renderedImages = images.map((image, index) => {
    
    const colIndex = index % numberOfColumns;
    let hasRightPadding = false;
    let hasLeftPadding = false;
    
    console.log(image + " " + colIndex);
    if (colIndex === 0) {
      // First column
      hasRightPadding = true;
      hasLeftPadding = false;
    } else if (colIndex === (numberOfColumns - 1)) {
      // Last column
      hasRightPadding = false;
      hasLeftPadding = true;
    } else {
      // Middle columns
      hasRightPadding = true;
      hasLeftPadding = true;
    }

    return (
      <GridBlock
        key={index}
        col="8"
        colMedium={columns}
        pl={hasLeftPadding}
        pr={hasRightPadding}
        pb
        pt
      >
        <MyImg src={imgPath + image} />
      </GridBlock>
    );
  });

  return <OneBigColumn>{renderedImages}</OneBigColumn>;
};

export default ImageGallery;

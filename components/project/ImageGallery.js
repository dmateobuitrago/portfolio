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

    const isFirstColumn = colIndex === 0;
    const isLastColumn = colIndex === columns - 1;

    return (
      <GridBlock
        key={index}
        col="8"
        colMedium={columns}
        pl={!isFirstColumn}
        pr={!isLastColumn}
        pb
      >
        <MyImg src={imgPath + image} />
      </GridBlock>
    );
  });

  return <OneBigColumn>{renderedImages}</OneBigColumn>;
};

export default ImageGallery;

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
    
    // To-do: Refactor this, cause it is adding paddings to all images, so it creates margin on the sides of the whole gallery and it doesn't show up aligned to the rest of the content. E.g. first and last image of the row has left and right margins

    return (
      <GridBlock
        key={index}
        col="8"
        colMedium={columns}
        pl
        pr
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

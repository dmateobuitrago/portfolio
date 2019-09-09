import React from "react";
import Link from "next/link";
import Typography from "../../components/atoms/Typography";
import { theme } from "../../theme/globalStyle";
import styled from "styled-components";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";

const StyledProjectCard = styled(GridContainer)`
  * {
    cursor: pointer;
  }
  @media screen and (max-width: ${theme.maxBreakPoints.medium}) {
    margin: ${theme.baseUnit4} auto !important;
  }
  opacity: 0;
  ${props =>
    !props.show &&
    `
        opacity: 1;
        top:0;
        transition: opacity 0.3s ease-in 1s;
    `}
`;

const MyImg = styled.img`
    max-width:100%;
`;


const Placeholder = styled.div`
  height: 250px;
  width: auto;
  background: red;
`;

class ProjectCard extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  renderImage(image) {
    let imageElement;

    if (this.state.isLoading) {
      imageElement = <Placeholder />;
    } else {
      imageElement = <MyImg src={image} />;
    }

    return imageElement;
  }


  render() {
    return (
      <Link href="/work/[id]" as={`/work/${this.props.id}`}>
        <StyledProjectCard show={this.state.isLoading}>
          <GridBlock col="8" colMedium="2" pr>
            <Typography mb="0" type="body" dark bold>
              {this.props.name}
            </Typography>
            <Typography type="body" dark>
              {this.props.tagline}
            </Typography>
          </GridBlock>
          <GridBlock col="8" colMedium="6">
            {this.renderImage(this.props.img)}
          </GridBlock>
        </StyledProjectCard>
      </Link>
    );
  }
}

export default ProjectCard;

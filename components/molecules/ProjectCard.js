import React from "react";
import Link from "next/link";
import Typography from "../../components/atoms/Typography";
import styled from "styled-components";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";

const StyledProjectCard = styled(GridContainer)`
  @media screen and (max-width: ${props => props.theme.maxBreakPoints.medium}) {
    margin: ${props => props.theme.baseUnit4} auto !important;
  }
  opacity: 0;
  ${props =>
    !props.show &&
    `
        opacity: 1;
        top:0;
        transition: opacity 0.3s ease-in 1s;
    `}

  a {
    color: inherit;
    text-decoration: none;
  }

  img,a {
    cursor:pointer;
  }
`;

const MyImg = styled.img`
  max-width: 100%;
`;

const Placeholder = styled.div`
  height: 300px;
  width: auto;
  background: black;
  opacity: 0.1;
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
      <StyledProjectCard>
        <GridBlock col="8" colMedium="2" pr>
          <Typography mb="0" type="body" dark bold>
            <Link href="/work/[id]" as={`/work/${this.props.id}`}>
              <a>{this.props.name}</a>
            </Link>
          </Typography>
          <Typography type="body" dark>
            {this.props.tagline}
          </Typography>
        </GridBlock>
        <GridBlock col="8" colMedium="6">
          <Link href="/work/[id]" as={`/work/${this.props.id}`}>
            {this.renderImage(this.props.img)}
          </Link>
        </GridBlock>
      </StyledProjectCard>
    );
  }
}

export default ProjectCard;

import React from "react";
import Link from "next/link";
import Typography from "../../components/atoms/Typography";
import styled from "styled-components";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";

const StyledProjectCard = styled(GridContainer)`
    @media screen and (max-width: ${(props) =>
            props.theme.maxBreakPoints.medium}) {
        margin: ${(props) => props.theme.baseUnit4} auto !important;
    }
    opacity: 0;
    ${(props) =>
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

    img,
    a {
        cursor: pointer;
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

const URLBROKEN = "https://www.behance.net/gallery/25519569/Broken-Symmetry-(D-AD-New-Blood-2015-Monotype)"

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

    renderTitle() {
        if (this.props.isExternal) {
            return (
                <a href={URLBROKEN} target="_blank">
                    {this.props.name}
                </a>
            );
        } else {
            return (
                <Link href="/[id]" as={`/${this.props.slug}`}>
                    <a>{this.props.name}</a>
                </Link>
            );
        }
    }

    renderHero() {
        if (this.props.isExternal) {
          return(
            <a href={URLBROKEN} target="_blank">
                {this.renderImage(this.props.img)}
            </a>
          )
        } else {
          return(
            <Link href="/[id]" as={`/${this.props.slug}`}>
                {this.renderImage(this.props.img)}
            </Link>
          )
        }
    }

    render() {
        return (
            <StyledProjectCard>
                <GridBlock col="8" colMedium="2" pr>
                    <Typography mb="0" type="body" dark bold>
                        {this.renderTitle()}
                    </Typography>
                    <Typography type="body" dark>
                        {this.props.tagline}
                    </Typography>
                </GridBlock>
                <GridBlock col="8" colMedium="6">
                    {this.renderHero()}
                </GridBlock>
            </StyledProjectCard>
        );
    }
}

export default ProjectCard;

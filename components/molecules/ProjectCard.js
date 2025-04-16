import React from "react";
import Link from "next/link";
import Typography from "../../components/atoms/Typography";
import styled from "styled-components";
import GridContainer from "../atoms/GridContainer";
import GridBlock from "../atoms/GridBlock";

const StyledProjectCard = styled(GridContainer)`
    @media screen and (max-width: ${(props) => props.theme.maxBreakPoints.medium}) {
        margin: ${(props) => props.theme.baseUnit4} auto !important;
    }

    ${(props) =>
        !props.show &&
        `
        opacity: 1;
        top: 0;
        transition: opacity 0.3s ease-in 1s;
    `}

    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }

    img,
    a {
        cursor: pointer;
    }
        
    &:hover {
        background: white;
        padding: ${(props) => props.theme.baseUnit2};
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        transition: all 0.3s ease;
        border-radius: 10px;
    }
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
        return this.state.isLoading ? <Placeholder /> : <img src={image} />;
    }

    renderCardContent() {
        const { name, tagline, img } = this.props;

        return (
            <>
                <GridBlock col="8" colMedium="4" colLarge="2" pr pb>
                    <Typography mb="0" type="body" dark bold>
                        {name}
                    </Typography>
                    <Typography type="body" dark>
                        {tagline}
                    </Typography>
                </GridBlock>
                <GridBlock col="8" colMedium="4" colLarge="6">
                    {this.renderImage(img)}
                </GridBlock>
            </>
        );
    }

    render() {
        const { isExternal, externalUrl, slug } = this.props;
        const content = <StyledProjectCard>{this.renderCardContent()}</StyledProjectCard>;

        if (isExternal) {
            return (
                <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            );
        } else {
            return (
                <Link href="/[id]" as={`/${slug}`} passHref legacyBehavior>
                    <a>{content}</a>
                </Link>
            );
        }
    }
}

export default ProjectCard;

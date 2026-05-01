import React, { useState, useEffect } from "react";
import Typography from "../../components/atoms/Typography";
import styled from "styled-components";
import GridBlock from "../atoms/GridBlock";
import Divider from "../atoms/Divider";
import styles from "./ProjectCard.module.css";

const StyledProjectCard = styled(GridBlock)`
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

  transition: all 0.3s ease;
  border-radius: 20px;
  background: white;
  border: ${(props) => props.theme.border1};

  &:hover {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.11);
  }
`;

const Placeholder = styled.div`
  height: 300px;
  width: auto;
  background: black;
  opacity: 0.05;
`;

const ProjectCard = ({ name, tagline, img, isExternal, externalUrl, slug }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const renderImage = () => {
    return isLoading ? <Placeholder /> : <img src={img} alt={name} />;
  };

  const content = (
    <div className={styles.content}>
      <div>
        <Typography type="body" dark bold>
          {name}
        </Typography>
        <Typography type="body" dark>
          {tagline}
        </Typography>
      </div>
      {renderImage()}
    </div>
  );

  const href = isExternal ? externalUrl : `/${slug}`;

  return (
    <StyledProjectCard col="8" colMedium="8">
      <a
        href={href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    </StyledProjectCard>
  );
};

export default ProjectCard;

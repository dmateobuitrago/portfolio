import React, { useState, useEffect } from "react";
import Typography from "../../components/atoms/Typography";
import styles from "./ProjectCard.module.css";

// Props:
//   name        string  — project title
//   tagline     string  — one-line description
//   img         string  — image path
//   slug        string  — internal route (e.g. "my-project")
//   isExternal  bool    — link to externalUrl instead of slug
//   externalUrl string  — full URL when isExternal is true

const ProjectCard = ({
  name,
  tagline,
  img,
  slug,
  isExternal = false,
  externalUrl,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const href = isExternal ? externalUrl : slug ? `/${slug}` : null;
  const hasLink = Boolean(href);

  const content = (
    <div className={styles.content}>
      <div className={styles.textContent}>
        <Typography type="body" dark bold>
          {name}
        </Typography>
        <Typography type="body" dark>
          {tagline}
        </Typography>
        {hasLink && (
          <Typography className={styles.readCaseStudy} type="body" dark>
            Read case study
          </Typography>
        )}
      </div>
      {isLoading ? (
        <div className={styles.placeholder} />
      ) : (
        <img src={img} alt={name} />
      )}
    </div>
  );

  const cardClass = [styles.card, hasLink && styles.cardLinked]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClass}>
      {hasLink ? (
        <a
          href={href}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default ProjectCard;

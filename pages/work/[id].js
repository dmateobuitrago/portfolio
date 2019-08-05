import React from "react";
import Layout from "../../components/layout/Layout";
import fetch from "isomorphic-unfetch";
import ProjectIntro from "../../components/project/ProjectIntro";
import TitleAndText from "../../components/project/TitleAndText";

const imgPath = "/static/images/";

class Project extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <ProjectIntro
          title={this.props.title}
          tagline={this.props.tagline}
          tldr={this.props.tldr}
          summary={this.props.summary}
        />
        <TitleAndText title="Aquí va un super titulo" body="Our fictional client was an online publication exploring life and culture through thematic , visually-oriented international coverage and commentary. They were part of a large publishing organization and they were an small team writing about several topics, focusing on releasing stories daily (about 4 or 6) and one long form weekly story."></TitleAndText>
      </Layout>
    );
  }
}

Project.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch("https://simplejsoncms.com/api/tyd6e1i4h5e");
  const data = await res.json();

  return data.projects[id - 1];
};

export default Project;

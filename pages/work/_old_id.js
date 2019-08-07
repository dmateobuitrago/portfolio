import React from "react";
import Layout from "../../components/layout/Layout";
import fetch from "isomorphic-unfetch";
import ProjectIntro from "../../components/project/ProjectIntro";
import TitleAndText from "../../components/project/TitleAndText";
import ImageAndTextAside from "../../components/project/ImageAndTextAside";
import ImageWithCaption from "../../components/project/ImageWithCaption";
import Divider from "../../components/atoms/Divider";
import { data } from "../../static/data/data";

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
      </Layout>
    );
  }
}

Project.getInitialProps = async function(context) {
  debugger
  const { id } = context.query;
  return data.projects[id - 1];
};

export default Project;

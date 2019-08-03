import React from "react";
import Layout from "../../components/layout/Layout";
import GridContainer from "../../components/atoms/GridContainer";
import GridBlock from "../../components/atoms/GridBlock";
import fetch from "isomorphic-unfetch";
import ProjectIntro from "../../components/project/ProjectIntro"



const imgPath = "/static/images/";

class Project extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <GridContainer>
          <GridBlock col="0" colMedium="1" />
          <GridBlock col="8" colMedium="6" padding>
            <ProjectIntro title={this.props.title} tagline={this.props.tagline} tldr={this.props.tldr} summary={this.props.summary}></ProjectIntro>
          </GridBlock>
          <GridBlock col="0" colMedium="1" />
        </GridContainer>
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

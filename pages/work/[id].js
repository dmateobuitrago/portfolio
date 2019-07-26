import React from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import GridContainer from "../../components/atoms/GridContainer";
import GridBlock from "../../components/atoms/GridBlock";
import fetch from "isomorphic-unfetch";
import Typography from "../../components/atoms/Typography";

const imgPath = "/static/images/";

class Project extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Layout>
        <GridContainer>
          <GridBlock col="0" colMedium="8" />
          <GridBlock col="0" colMedium="2">
            <Typography type="title" dark>
              {this.props.title}
            </Typography>
          </GridBlock>
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

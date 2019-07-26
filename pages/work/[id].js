import React from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import GridContainer from "../../components/atoms/GridContainer";
import GridBlock from "../../components/atoms/GridBlock";
import fetch from "isomorphic-unfetch";
import Typography from "../../components/atoms/Typography";
import DataPair from "../../components/molecules/DataPair";

const imgPath = "/static/images/";

class Project extends React.Component {
  constructor() {
    super();
  }

  renderSummary() {
    debugger
    let summary = [];
    const s = this.props.summary;
    for (let key in this.props.summary) {
      if (s.hasOwnProperty(key)) {
        summary.push(<DataPair name={key} value={s[key]} />);
      }
    }
    return summary;
  }

  render() {
    return (
      <Layout>
        <GridContainer>
          <GridBlock col="0" colMedium="1" />
          <GridBlock col="8" colMedium="6">
            <Typography type="title" dark>
              {this.props.title}
            </Typography>
            <DataPair name="tl;dr" value={this.props.tldr} />
            {this.renderSummary()}
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

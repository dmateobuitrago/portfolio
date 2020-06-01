import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import GridContainer from "../components/atoms/GridContainer";
import GridBlock from "../components/atoms/GridBlock";
import fetch from "isomorphic-unfetch";
import Typography from "../components/atoms/Typography";

const imgPath = "/static/images/";

class Work extends React.Component {
    constructor(){
        super();
    }
  render() {
      
    return (
      <Layout>
        <GridContainer>
          <GridBlock col="0" colMedium="8" />
          <GridBlock col="0" colMedium="2">
            <Typography type="title" dark>
              Work
            </Typography>
              {this.props.projects.map(project => (
                  <Link key={project.id} href="/work/[id]" as={`/work/${project.id}`}>
                    <a>{project.title}</a>
                  </Link>
              ))}
          </GridBlock>
        </GridContainer>
      </Layout>
    );
  }
}

Work.getInitialProps = async function() {
  const res = await fetch("https://simplejsoncms.com/api/tyd6e1i4h5e");
  const data = await res.json();
  // console.log(data);

  // console.log(`Show data fetched. Count: ${data.length}`);

  return data;
};

export default Work;

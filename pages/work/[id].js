import React from "react";
import Layout from "../../components/layout/Layout";
import { data } from "../../static/data/data";
import ProjectIntro from "../../components/project/ProjectIntro";
import TitleAndText from "../../components/project/TitleAndText";
import BigImage from "../../components/project/BigImage";
import ImageWithCaption from "../../components/project/ImageWithCaption";
import Divider from "../../components/atoms/Divider";

class Project extends React.Component {
  constructor() {
    super();
  }

  renderTitleAndText(item, index) {
    return <TitleAndText key={index} title={item.title} body={item.content} />;
  }

  renderImageWithCaption(item, index) {
    return <ImageWithCaption key={index} image={item.image} body={item.caption} />;
  }

  renderBigImage(item, index) {
    return <BigImage key={index} image={item.image} />;
  }

  renderContent(content) {
    if(!content){
      return "";
    }
    let renderElement = []
    content.map((item,index) => {
      let type = item.type;

      switch (type) {
        case "TitleAndText":
          renderElement.push( this.renderTitleAndText(item, index));
          break;
        case "ImageWithCaption":
          renderElement.push( this.renderImageWithCaption(item, index));
          break;
        case "BigImage":
          renderElement.push( this.renderBigImage(item, index));
          break;
        case "Divider":
          renderElement.push(<Divider/>);
          break;
        }
    });

    return renderElement;
  }

  render() {
    return (
      <Layout>
        <ProjectIntro
          title={this.props.title}
          tagline={this.props.tagline}
          tldr={this.props.tldr}
          summary={this.props.summary}
          image={this.props.image}
        />
        <Divider />
          {this.renderContent(this.props.content)}
        <Divider />
      </Layout>
    );
  }
}

Project.getInitialProps = async function(context) {
  const { id } = context.query;
  return data.projects[id - 1];
};

export default Project;

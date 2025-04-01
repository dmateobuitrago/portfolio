import React from "react";
import Layout from "../components/layout/Layout";
import { data } from "../static/data/data";
import ProjectIntro from "../components/project/ProjectIntro";
import TitleAndText from "../components/project/TitleAndText";
import BigImage from "../components/project/BigImage";
import ImageWithCaption from "../components/project/ImageWithCaption";
import VideoWithCaption from "../components/project/VideoWithCaption";
import Divider from "../components/atoms/Divider";
import ImageGallery from "../components/project/ImageGallery";

class Project extends React.Component {
  constructor() {
    super();
  }

  renderTitleAndText(item, index) {
    return <TitleAndText key={index} title={item.title} body={item.content} />;
  }

  renderImageWithCaption(item, index) {
    return <ImageWithCaption key={index} image={item.image} body={item.caption} layout={item.layout} />;
  }

  renderVideoWithCaption(item, index) {
    return <VideoWithCaption key={index} video={item.video} body={item.caption} />;
  }

  renderBigImage(item, index) {
    return <BigImage key={index} image={item.image} />;
  }

  renderImageGallery(item, index) {
    return <ImageGallery key={index} images={item.images} columns={item.columns} />;
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
        case "VideoWithCaption":
          renderElement.push( this.renderVideoWithCaption(item, index));
          break;
        case "BigImage":
          renderElement.push( this.renderBigImage(item, index));
          break;
        case "ImageGallery":
          renderElement.push( this.renderImageGallery(item, index));
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
  let index = data.projects.findIndex(project => project.slug == id)
  return data.projects[index];
};

export default Project;

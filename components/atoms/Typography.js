import React from "react";
import styled from "styled-components";

const Base = styled.div`
  color: ${(props) =>
    props.$dark ? props.theme.primary : props.theme.secondary};
  font-family: ${(props) => props.theme.font.fontFamily};
  font-weight: ${(props) => (props.$bold ? "700" : "300")};
  text-align: ${(props) => (props.$align ? props.$align : "left")};
`;

const Huge = styled(Base)`
  font-size: ${(props) => props.theme.font.size.xxLarge};
`;

const Title = styled(Base)`
  font-size: ${(props) => props.theme.font.size.xLarge};
  line-height: 1.2;
`;

const Subtitle = styled(Base)`
  font-size: ${(props) => props.theme.font.size.large};
  line-height: 1.5;
`;

const Body = styled(Base)`
  font-size: ${(props) => props.theme.font.size.medium};
  line-height: 1.5;
`;

const Small = styled(Base)`
  font-size: ${(props) => props.theme.font.size.small};
  line-height: 1.5;
`;

class Typography extends React.Component {
  formatContent(content) {
    let formatedContent;
    if (typeof content === "string" || content instanceof String) {
      formatedContent = content.replace("*(", "&lt;strong&gt;");
      formatedContent = formatedContent.replace(")*", "&lt;/strong&gt;");
    }

    return formatedContent;
  }

  render() {
    let content = this.props.children;

    const { type, bold, dark, align, mb, className } = this.props;

    const sharedProps = {
      className,
      $bold: bold,
      $align: align,
      $dark: dark,
      $mb: mb,
    };

    switch (type) {
      case "title":
        return <Title {...sharedProps}>{content}</Title>;
      case "subtitle":
        return <Subtitle {...sharedProps}>{content}</Subtitle>;
      case "huge":
        return <Huge {...sharedProps}>{content}</Huge>;
      case "body":
        return <Body {...sharedProps}>{content}</Body>;
      case "small":
        return <Small {...sharedProps}>{content}</Small>;
      default:
        return <Body {...sharedProps}>{content}</Body>;
    }
  }
}

export default Typography;

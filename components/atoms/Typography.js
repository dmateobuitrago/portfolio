import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  color: ${props => props.dark ? props.theme.primary : props.theme.secondary};
  font-family: ${props => props.theme.font.fontFamily};
  font-weight: ${props => props.bold ? '700' : '300'};
  text-align: ${props => props.align ? props.align : 'left'};
  margin-bottom: ${props => props.mb ? props.mb : props.theme.baseUnit}
`;

const Huge = styled(Base)`
  font-size: ${props => props.theme.font.size.xxLarge}
`

const Title = styled(Base)`
  font-size: ${props => props.theme.font.size.xLarge}
`

const Subtitle = styled(Base)`
  font-size: ${props => props.theme.font.size.large}
`

const Body = styled(Base)`
  font-size: ${props => props.theme.font.size.medium}
  line-height: 1.5;
`
  
  const Small = styled(Base)`
  font-size: ${props => props.theme.font.size.small}
  line-height: 1.5;
`

class Typography extends React.Component {

  parseFromString(markup){
			let  doc = document.implementation.createHTMLDocument("");
	      		if (markup.toLowerCase().indexOf('<!doctype') > -1) {
        			doc.documentElement.innerHTML = markup;
      			}
      			else {
        			doc.body.innerHTML = markup;
      			}
			return doc;
		}

  formatContent(content){
    let formatedContent;
    if(typeof content === 'string' || content instanceof String){
      formatedContent = content.replace("*(", '&lt;strong&gt;');
      formatedContent = formatedContent.replace(")*", '&lt;/strong&gt;');
    }

    return this.parseFromString(formatedContent);
  }
  

  render() {

    // let content = this.formatContent(this.props.children)
    let content = this.props.children

    const type = this.props.type;
    const bold = this.props.bold;
    const dark = this.props.dark;
    const align = this.props.align;
    const mb = this.props.mb;

    switch (type) {
      case 'title':
        return <Title className={this.props.className} bold={bold} align={align} dark={dark} mb={mb}>{content}</Title>
        break;
      case 'subtitle':
        return <Subtitle className={this.props.className} bold={bold} align={align} dark={dark} mb={mb}>{content}</Subtitle>
        break;
      case 'huge':
        return <Huge className={this.props.className} bold={bold} align={align} dark={dark} mb={mb}>{content}</Huge>
        break;
      case 'body':
        return <Body className={this.props.className} bold={bold} align={align}  dark={dark} mb={mb}>{this.formatContent(content)}</Body>
        break;
      case 'small':
        return <Small className={this.props.className} bold={bold} align={align}  dark={dark} mb={mb}>{content}</Small>
        break;
      default:
        return <Body className={this.props.className} bold={bold} align={align}  dark={dark} mb={mb}>{content}</Body>
        break;
    }

  }
}

export default Typography;
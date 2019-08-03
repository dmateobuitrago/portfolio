import React from 'react';
import { theme } from '../../theme/globalStyle';
import styled from 'styled-components';

const Base = styled.div`
  color: ${props => props.dark ? theme.primary : theme.secondary};
  font-family: ${theme.font.fontFamily};
  font-weight: ${props => props.bold ? '700' : '300'};
  text-align: ${props => props.align ? props.align : 'left'};
  margin-bottom: ${props => props.mb ? props.mb : theme.baseUnit}
`;

const Title = styled(Base)`
  font-size: ${theme.font.size.xLarge}
`

const Subtitle = styled(Base)`
  font-size: ${theme.font.size.large}
`

const Body = styled(Base)`
  font-size: ${theme.font.size.medium}
  line-height: 1.5;
`

const Small = styled(Base)`
  font-size: ${theme.font.size.small}
`

class Typography extends React.Component {
  

  render() {
    const type = this.props.type;
    const bold = this.props.bold;
    const dark = this.props.dark;
    const align = this.props.align;
    const mb = this.props.mb;

    switch (type) {
      case 'title':
        return <Title className={this.props.className} bold={bold} align={align} dark={dark} mb={mb}>{this.props.children}</Title>
        break;
      case 'subtitle':
        return <Subtitle className={this.props.className} bold={bold} align={align} dark={dark} mb={mb}>{this.props.children}</Subtitle>
        break;
      case 'body':
        return <Body className={this.props.className} bold={bold} align={align}  dark={dark} mb={mb}>{this.props.children}</Body>
        break;
      case 'small':
        return <Small className={this.props.className} bold={bold} align={align}  dark={dark} mb={mb}>{this.props.children}</Small>
        break;
      default:
        return <Body className={this.props.className} bold={bold} align={align}  dark={dark} mb={mb}>{this.props.children}</Body>
        break;
    }

  }
}

export default Typography;
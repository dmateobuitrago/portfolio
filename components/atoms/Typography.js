import React from 'react';
import { theme } from '../../theme/globalStyle';
import styled from 'styled-components';

const Base = styled.div`
  color: ${props => props.dark ? theme.primary : theme.secondary};
  font-family: ${theme.font.fontFamily};
  font-weight: ${props => props.bold ? '700' : '300'};
  text-align: left;
`;

const Title = styled(Base)`
  font-size: ${theme.font.size.xLarge}
`

const Subtitle = styled(Base)`
  font-size: ${theme.font.size.large}
`

const Body = styled(Base)`
  font-size: ${theme.font.size.medium}
`

const Small = styled(Base)`
  font-size: ${theme.font.size.small}
`

class Typography extends React.Component {
  

  render() {
    const type = this.props.type;
    const bold = this.props.bold;
    const dark = this.props.dark;
    switch (type) {
      case 'title':
        return <Title bold={bold} dark={dark}>{this.props.children}</Title>
        break;
      case 'subtitle':
        return <Subtitle bold={bold} dark={dark}>{this.props.children}</Subtitle>
        break;
      case 'body':
        return<Body bold={bold}  dark={dark}>{this.props.children}</Body>
        break;
      case 'small':
        return<Small bold={bold}  dark={dark}>{this.props.children}</Small>
        break;
      default:
        return <Body bold={bold}  dark={dark}>{this.props.children}</Body>
        break;
    }

  }
}

export default Typography;
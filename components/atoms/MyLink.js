import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';
import Link from 'next/link';

const StyledLink = styled(Typography)`
    text-decoration: underline;
    &:visited{
      color: red;
    }

    a {
      color: inherit;
    }
`

class MyLink extends React.Component {
    render() {
      return (
        <StyledLink type="body" dark>
                <a href={this.props.href}>{this.props.children}</a>
        </StyledLink>
      );
    }
  }
  
  export default MyLink;
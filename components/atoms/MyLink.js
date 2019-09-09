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
            <Link href={this.props.href}>
                <a>{this.props.children}</a>
            </Link>
        </StyledLink>
      );
    }
  }
  
  export default MyLink;
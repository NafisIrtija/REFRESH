import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare,faFacebookSquare,faRedditSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const A = styled.a`
  font-size:x-large;
`;

function Home() {
  return (
    <div >
      <A href="https://twitter.com/"> <FontAwesomeIcon icon={faTwitterSquare}/></A>
      <A href="https://facebook.com/"> <FontAwesomeIcon icon={faFacebookSquare}/></A>
      <A href="https://reddit.com/"> <FontAwesomeIcon icon={faRedditSquare}/></A>
      <A href="https://linkedin.com/"> <FontAwesomeIcon icon={faLinkedin}/></A>
      
    </div>
  );
}

export default Home;


import React from 'react';

import Header from '../components/header';
import Container from '../components/container';

const About = () => {
  return (
    <Container>
      <div style={{ color: 'teal' }}>
        <Header title="About Gatsby" />
        <p>Such wow. Very React like.</p>
      </div>
    </Container>
  );
};

export default About;

import React from 'react';

import Header from '../components/header';
import Container from '../components/container';

const Contact = () => {
  return (
    <Container>
      <Header title="Contact Gatsby" />
      <p>Get in touch with me!</p>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Container>
  );
};

export default Contact;

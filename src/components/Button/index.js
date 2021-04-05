import React from 'react';

import { Container, Title } from './styles';

const Button = ({ onPress, title }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;

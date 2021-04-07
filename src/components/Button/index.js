import React from 'react';

import { Container, IconContainer, Title } from './styles';

const Button = ({ onPress, title, icon, width }) => {
  return (
    <Container width={width} onPress={onPress}>
      <Title>{title}</Title>
      {icon && <IconContainer>{icon}</IconContainer>}
    </Container>
  );
};

export default Button;

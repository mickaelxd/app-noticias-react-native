import React from 'react';
import { Container } from './styles';

const Card = ({ children, onPress }) => {
  return <Container onPress={onPress}>{children}</Container>;
};

export default Card;

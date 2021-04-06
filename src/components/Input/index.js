import React from 'react';
import TextLabel from '~/components/TextLabel';

import { Container, ContainerInput } from './styles';

const Input = ({
  label,
  multiline,
  width,
  marginRight,
  marginTop,
  marginBottom,
  ...rest
}) => {
  return (
    <Container
      width={width}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {label && (
        <TextLabel color="black" fontSize={14} marginLeft={8} marginBottom={4}>
          {label}
        </TextLabel>
      )}

      <ContainerInput multiline={multiline} {...rest} />
    </Container>
  );
};

export default Input;

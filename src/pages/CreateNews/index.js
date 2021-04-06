import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container } from './styles';

const CreateNews = () => {
  const [titleValue, setTitleValue] = useState(null);
  const [bodyValue, setBodyValue] = useState(null);
  const navigation = useNavigation();

  const handleContinue = () => {
    if (
      titleValue &&
      titleValue.length > 10 &&
      bodyValue &&
      bodyValue.length > 10
    ) {
      const object = {
        title: titleValue,
        body: bodyValue,
      };

      navigation.navigate('Home', { object, reload: true });
    }
  };

  return (
    <Container>
      <Input
        onChangeText={text => setTitleValue(text)}
        value={titleValue}
        marginBottom="15px"
        label="Título da Notícia"
      />
      <Input
        onChangeText={text => setBodyValue(text)}
        value={bodyValue}
        marginBottom="15px"
        label="Corpo da Notícia"
        multiline
      />
      <Button title="Salvar" onPress={handleContinue} />
    </Container>
  );
};

export default CreateNews;

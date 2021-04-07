import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container } from './styles';
import TextLabel from '~/components/TextLabel';

const CreateNews = ({ route, navigation }) => {
  const [titleValue, setTitleValue] = useState(null);
  const [bodyValue, setBodyValue] = useState(null);
  const [authorValue, setAuthorValue] = useState(null);
  const [idValue, setIdValue] = useState(uuid.v4());

  useEffect(() => {
    const newsItem = route.params?.newsItem;
    if (newsItem) {
      setTitleValue(newsItem.title);
      setBodyValue(newsItem.body);
      setAuthorValue(newsItem.author);
      setIdValue(newsItem.id);
    }
  }, []);

  const handleContinue = () => {
    if (
      titleValue &&
      titleValue.length > 5 &&
      bodyValue &&
      bodyValue.length > 5 &&
      authorValue &&
      authorValue.length > 5
    ) {
      const object = {
        id: idValue,
        title: titleValue,
        body: bodyValue,
        author: authorValue,
      };

      navigation.navigate('Home', { object, reload: true });
    }
  };

  return (
    <Container>
      <Input
        onChangeText={text => setAuthorValue(text)}
        value={authorValue}
        label="Autor*"
      />
      <Input
        onChangeText={text => setTitleValue(text)}
        value={titleValue}
        label="Título da Notícia*"
      />
      <Input
        onChangeText={text => setBodyValue(text)}
        value={bodyValue}
        marginBottom="15px"
        label="Corpo da Notícia*"
        multiline
      />
      <TextLabel color="black">
        Todos os Campos tem um limite mínimo de 5 caracteres*
      </TextLabel>
      <Button title="Salvar" onPress={handleContinue} />
    </Container>
  );
};

export default CreateNews;

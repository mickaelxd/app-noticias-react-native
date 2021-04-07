import React, { useState, useEffect } from 'react';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container } from './styles';

const CreateNews = ({ route, navigation }) => {
  const [titleValue, setTitleValue] = useState(null);
  const [bodyValue, setBodyValue] = useState(null);
  const [authorValue, setAuthorValue] = useState(null);

  useEffect(() => {
    const newsItem = route.params?.newsItem;
    if (newsItem) {
      setTitleValue(newsItem.title);
      setBodyValue(newsItem.body);
      setAuthorValue(newsItem.author);
    }
  }, []);

  const handleContinue = () => {
    if (
      titleValue &&
      titleValue.length > 10 &&
      bodyValue &&
      bodyValue.length > 10 &&
      authorValue &&
      authorValue.length > 3
    ) {
      const object = {
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
        label="Autor"
      />
      <Input
        onChangeText={text => setTitleValue(text)}
        value={titleValue}
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

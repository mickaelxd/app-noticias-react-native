import React, { useEffect, useState, useCallback } from 'react';
import { isEmpty } from 'lodash';

import TextLabel from '~/components/TextLabel';
import Button from '~/components/Button';

import { Container } from './styles';

const Home = ({ route, navigation }) => {
  const [news, setNews] = useState([]);

  const handleNews = useCallback(async () => {
    try {
      if (route.params?.object) {
        if (isEmpty(route.params?.object)) return;
        setNews([route.params?.object, ...news]);
      }
    } catch (e) {
      // console.log(e);
    }
  }, [news, route.params?.object]);

  useEffect(() => {
    if (route.params?.reload) {
      handleNews();
      navigation.setParams({ reload: false, object: {} });
    }
  }, [handleNews, navigation, route.params]);

  useEffect(() => handleNews(), []);

  return (
    <Container>
      <Button
        title="Criar Nova Noticia"
        onPress={() => navigation.navigate('CreateNews')}
      />
      {news?.map(NewsItem => (
        <React.Fragment key={NewsItem.title}>
          <TextLabel color="black" type="bold" marginTop={16}>
            {NewsItem.title}
          </TextLabel>
          <TextLabel color="black">{NewsItem.body}</TextLabel>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Home;

import React, { useEffect, useState, useCallback } from 'react';
import { isEmpty } from 'lodash';

import Icon from 'react-native-vector-icons/FontAwesome';
import TextLabel from '~/components/TextLabel';
import Button from '~/components/Button';

import { Container, IconContainer } from './styles';
import Input from '~/components/Input';
import { CONSTANT_NEWS } from '~/utils/constantNews';
import Card from '~/components/Card';

const Home = ({ route, navigation }) => {
  const [news, setNews] = useState(CONSTANT_NEWS);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchBarText, setSearchBarText] = useState('');

  const handleNews = useCallback(async () => {
    try {
      if (route.params?.object) {
        if (isEmpty(route.params?.object)) return;
        setNews([route.params?.object, ...news]);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }, [news, route.params?.object]);

  const handleEditNews = useCallback(() => {}, []);

  const filteredNews = useCallback(() => {
    if (searchBarText) {
      return news.filter(newsItem =>
        newsItem.title.toLowerCase().includes(searchBarText.toLowerCase())
      );
    }

    return news;
  }, [news, searchBarText]);

  // After Create News, reload News Object
  useEffect(() => {
    if (route.params?.reload) {
      handleNews();
      navigation.setParams({ reload: false, object: {} });
    }
  }, [handleNews, navigation, route.params]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconContainer
          onPress={() => setShowSearchBar(prevState => !prevState)}
        >
          {!showSearchBar ? (
            <Icon name="search" size={24} color="black" />
          ) : (
            <Icon name="pencil" size={24} color="black" />
          )}
        </IconContainer>
      ),
    });
    handleNews();
  }, [handleNews, navigation, showSearchBar]);

  return (
    <Container>
      {showSearchBar ? (
        <Input
          label="Pesquisar Notícia por Título"
          value={searchBarText}
          onChangeText={text => setSearchBarText(text)}
        />
      ) : (
        <Button
          title="Criar Nova Noticia"
          onPress={() => navigation.navigate('CreateNews')}
        />
      )}

      {filteredNews()?.map(NewsItem => (
        <Card key={NewsItem.title} onPress={() => handleEditNews(NewsItem)}>
          <TextLabel color="black" type="bold">
            {NewsItem.title}
          </TextLabel>
          <TextLabel color="black">{NewsItem.body}</TextLabel>
          <TextLabel color="grey">Autor: {NewsItem.author}</TextLabel>
        </Card>
      ))}
    </Container>
  );
};

export default Home;

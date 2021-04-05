import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '~/components/Button';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Criar Nova Noticia"
        onPress={() => navigation.navigate('CreateNews')}
      />
    </View>
  );
};

export default Home;

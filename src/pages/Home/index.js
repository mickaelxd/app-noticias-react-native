import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Tela1')}>
        <Text>Ir para outra tela</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

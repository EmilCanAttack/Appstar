// LedigeKampe.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const LedigeKampe = ({ navigation }) => {
  return (
    <View>
      <Text>Ledige Kampe</Text>
      <Button title="Tilbage til Hjem" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LedigeKampe;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resultater = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til Resultater</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Resultater;

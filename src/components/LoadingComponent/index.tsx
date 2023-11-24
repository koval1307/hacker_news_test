import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const LoadingScreen = () => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={style.container}>
      <ActivityIndicator color={'#ae1111'} />
    </View>
  );
};

export default LoadingScreen;

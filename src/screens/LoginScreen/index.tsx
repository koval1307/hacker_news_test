import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import styles from './styles';

const LoginScreen = () => {
  const {authorize, isLoading} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hacker News</Text>
      <Text style={styles.subtitle}>Please log in to continue</Text>
      <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

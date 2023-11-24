import React from 'react';
import {RootStackParamList} from '../types/navigation';
import {useAuth0} from 'react-native-auth0';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  const {user} = useAuth0();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <Stack.Screen name="Main" component={MainStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;

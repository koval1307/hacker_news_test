import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from '../types/navigation';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;

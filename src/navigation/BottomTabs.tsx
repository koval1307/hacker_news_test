import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Poll from '../tabs/Poll';
import Jobs from '../tabs/Jobs';
import {TopTabParamList} from '../types/navigation';
import Top from '../tabs/Top';
import {TouchableOpacity, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {styles} from './styles';

const Tab = createBottomTabNavigator<TopTabParamList>();

const BottomTabs = () => {
  const {clearSession, user} = useAuth0();

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
        },

        tabBarActiveTintColor: '#FF6600',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          textTransform: 'none',
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Top',
          headerRight: () => (
            <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={styles.nameContainer}>
              <Text>{user?.name}</Text>
            </View>
          ),
        }}
        name="Top"
        component={Top}
      />
      <Tab.Screen
        options={{
          title: 'Poll',
          headerRight: () => (
            <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>{user?.name}</Text>
            </View>
          ),
        }}
        name="Poll"
        component={Poll}
      />
      <Tab.Screen
        options={{
          title: 'Jobs',
          headerRight: () => (
            <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>{user?.name}</Text>
            </View>
          ),
        }}
        name="Jobs"
        component={Jobs}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

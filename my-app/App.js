import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SignInScreen from './SignInScreen';
import ExplorerScreen from './ExplorerScreen';
import AccountScreen from './AccountScreen';
import { AuthProvider } from './AuthContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Sign In') {
                iconName = focused ? 'log-in' : 'log-in-outline';
              } else if (route.name === 'Explorer') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Account') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Sign In" component={SignInScreen} />
          <Tab.Screen name="Explorer" component={ExplorerScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

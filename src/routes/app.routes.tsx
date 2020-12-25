import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const TabStack = createBottomTabNavigator();

const AppRoutes: React.FC = () => {

  const style = useSelector((state:any) => state.style);
  const user = useSelector((state:any) => state.user);
  const theme = user.settings.darkMode ? 'darkMode' : 'lightMode';

  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Icon name='home' size={size} color={color} />
          } else if (route.name === 'Profile') {
            return <Icon name='account-circle' size={size} color={color} />
          } else {
            return <Icon name='apps' size={size} color={color} />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: style[theme].primary,
        inactiveTintColor: style[theme].primaryText,
        style: {
          backgroundColor: style[theme].surface,
        },
      }}
    >
      <TabStack.Screen name="Home" component={Home} />
      <TabStack.Screen name="Profile" component={Profile} />
    </TabStack.Navigator>
  );
};

export default AppRoutes;
import {
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
  EvilIcons
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import LibraryScreen from '../screens/LibraryScreen';
import AlbumScreen from '../screens/AlbumScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Ana Sayfa',
          tabBarIcon: ({ color }) => <Foundation name="home" style={{ marginBottom: -3 }} size={30} color={color} />,
          headerShown: false
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Arama',
          tabBarIcon: ({ color }) => <EvilIcons name="search" style={{ marginBottom: -3 }} size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          title: 'Kitaplığın',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bookshelf" style={{ marginBottom: -3 }} size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
const TabOneStack = createNativeStackNavigator<RootStackParamList>();

function HomeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Album' }}
      />
    </TabOneStack.Navigator>
  );
}


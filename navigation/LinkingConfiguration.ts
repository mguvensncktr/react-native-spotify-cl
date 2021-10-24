import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Search: {
            screens: {
              SearchScreen: 'search',
            },
          },
          Library: {
            screens: {
              TabTwoScreen: 'library',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;

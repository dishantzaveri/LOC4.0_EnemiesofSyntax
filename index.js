/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import HomeNavigator from './screens/HomeNavigator';

AppRegistry.registerComponent(appName, () => HomeNavigator);

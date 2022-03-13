/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Events from './screens/Events';
import qrcode from './screens/QRCode';
import Home from './screens/Home';
import News from './screens/News';
import Profile from './screens/Profile';
import QRCode from './screens/QRCode';
import QRCodes from './screens/QRCode';
import Video from './screens/Video';

AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';
import App from './App';
//第一个参数和MainActivity中的getMainComponentName()方法返回值一致
//第二个参数跟import后面的值一致
AppRegistry.registerComponent('AndroidDemo', () => App);

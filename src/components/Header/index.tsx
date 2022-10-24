import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

export const Header: React.FC = () => {
  return <View style={styles.container} >
    <Image style={styles.logo} source={require('../../../assets/splash.png')} />
  </View>;
}

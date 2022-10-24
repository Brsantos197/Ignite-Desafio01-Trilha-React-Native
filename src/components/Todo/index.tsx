import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

import { styles } from './styles';

export type TodoProps = {
  name: string,
  status: boolean,
  changeStatus?: (status: boolean) => void,
  removeTodo?: () => void
}

export const Todo = ({ name, status, changeStatus, removeTodo }: TodoProps) => {
  return <View style={styles.container}>
    <Checkbox color={status ? "#5E60CE" : "#4EA8DE" } style={styles.checkbox} value={status} onValueChange={changeStatus} />
    <Text style={!status ? styles.todoText : styles.todoTextComplete }>{name}</Text>
    <Pressable onPress={removeTodo}><Image source={require('../../../assets/trash.png')} /></Pressable>
  </View>;
}

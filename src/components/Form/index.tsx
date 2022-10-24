import React, { useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import { TodoProps } from '../Todo';

import { styles } from './styles';

type FormProps = {
  addTodo: () => void
  changeTodo: (name: string) => void
  todo: TodoProps
}

export const Form = ({ addTodo, changeTodo, todo }: FormProps) => {

  const [inputStyle, setInputStyle] = useState(styles.input);

  return <View style={styles.form}>
    <TextInput
      style={inputStyle}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      onFocus={() => setInputStyle(styles.inputFocus)}
      onBlur={() => setInputStyle(styles.input)}
      onChangeText={changeTodo}
      value={todo.name}
    />
    <Pressable style={styles.button} onPress={addTodo}>
      <Image source={require('../../../assets/plus.png')} />
    </Pressable>
  </View>
}

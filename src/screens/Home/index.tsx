import React, { useState } from 'react';
import { Alert, FlatList, Image, Text, View } from 'react-native'
import { Form } from '../../components/Form';
import { Todo, TodoProps } from '../../components/Todo';

import { styles } from './styles';

export const Home: React.FC = () => {

  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [todo, setTodo] = useState<TodoProps>({ name: '', status: false });

  const handleTodoAdd = () => {
    if (!todo.name) {
      return Alert.alert('Tarefa inválida', 'Digite uma tarefa!')
    }
    if (todos.some(t => t.name === todo.name)) {
      return Alert.alert('Esta tarefa já existe!', 'Essa tarefa já existe na lista.')
    }
    setTodos(prevState => [...prevState, todo])
    setTodo({ name: '', status: false })
  }

  const handleTodoRemove = (todoRemove: TodoProps) => {
    const findTodo = todos.find(t => t.name === todoRemove.name)
    if (findTodo) {
      findTodo.status = !todoRemove.status
      setTodos(todos.filter(t => t.name !== todoRemove.name))
    }
  }

  const handleTodoChangeName = (name: string) => {
    setTodo({ ...todo, name })
  }

  const handleTodoChangeStatus = (todoChange: TodoProps) => {
    const findTodo = todos.find(t => t.name === todoChange.name)
    if (findTodo) {
      findTodo.status = !todoChange.status
      setTodos([...todos])
    }
  }

  return (
    <View style={styles.container}>
      <Form addTodo={handleTodoAdd} changeTodo={handleTodoChangeName} todo={todo} />
      <View style={styles.info}>
        <View style={styles.infoContent}>
          <Text style={{ color: '#4EA8DE' }}>Criadas</Text>
          <Text style={styles.counter}>{todos.length}</Text>
        </View>
        <View style={styles.infoContent}>
          <Text style={{ color: '#8284FA' }}>Concluídas</Text>
          <Text style={styles.counter}>{todos.filter(t => t.status).length}</Text>
        </View>
      </View>
      <FlatList
        style={styles.todoList}
        data={todos}
        keyExtractor={todo => todo.name}
        renderItem={({ item }) => (
          <Todo key={item.name} name={item.name} status={item.status} changeStatus={() => handleTodoChangeStatus(item)} removeTodo={() => handleTodoRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Image style={styles.clipboard} source={require('../../../assets/clipboard.png')} />
            <Text style={{ color: '#808080', fontWeight: '700' }}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={{ color: '#808080' }}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}

import React from 'react'
import { Text, View, FlatList } from 'react-native'

const TaskList = ({tasks})=> {

  const renderItem = ({item}) =>{
    
  }
    
  return (
      <FlatList 
          data={tasks}
          keyExtractor={(item) => item.id + ''}
          renderItem={( {item})=> {
            return <Text>{item.description} </Text>
          }}
        />
    )
}

export default TaskList

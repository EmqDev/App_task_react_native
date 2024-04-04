import React, { useEffect, useState } from 'react'
import { getTask } from '../api';
import { Text, View, FlatList } from 'react-native'
import TaskItem from './TaskItem'
import { RefreshControl } from 'react-native-gesture-handler';

const TaskList = () => {

  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadTask = async () => {
    const data = await getTask();
    setTasks(data);

  }

  useEffect(() => {
    loadTask()
  }, [])

  const renderItem = ({ item }) => {
    return <TaskItem task={item} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTask();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id + ''}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#78e08f"]}
          progressBackgroundColor="#0a3d62"
          onRefresh={onRefresh}
        />
      }
    />
  );
};

export default TaskList;

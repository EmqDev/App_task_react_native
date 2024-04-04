import React, { useState } from "react";
import { Text, StyleSheet,TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import Layout from "../components/Layout";
import { saveTask } from "../api";

const TaskFormScreen = ({ navigation })  => {
  
  const [task,setTask] = useState({
    title: '',
    description: ''
  });

  const handleChange = (name, value) => setTask({...task,[name]:value});

  const handleSubmit = () =>{
    saveTask(task);
    navigation.navigate("HomeScreen");
  }

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write a Title"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange('title',text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Write a Description"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange('description',text)}
      />

      <TouchableOpacity style={styles.buttonSafe} >
        <Text style={styles.textSafe} onPress={handleSubmit}>
            Save
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 35,
    color: "#fff",
    textAlign: "center",
    padding: 4,
    borderRadius: 5,
  },
  buttonSafe:{
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:10,
    backgroundColor:"#10ac84",
    width:"90%"
  },
  textSafe:{
    color:"#fff",
    textAlign:"center"
  }

});

export default TaskFormScreen;

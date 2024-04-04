import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#fff" },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("TaskFormScreen")}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  New
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={{
            title: "Create a Task",
            headerStyle:{backgroundColor:"#222f3e"},
            headerTitleStyle: { color: "#fff" },
            headerTintColor : "#fff" ,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

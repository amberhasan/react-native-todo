import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function CreateTodoScreen() {
  let [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      todoList = [...todoList, newTodo];
      setTodoList(todoList); //make the current list include the todo, //setTodoList((todoList) => [...todoList, newTodo]);
      setNewTodo(""); //make the current newTodo be empty string
    }
  };

  const clearTodoList = () => {
    setTodoList([]);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        placeholder="Enter a TODO item"
        value={newTodo}
        onChangeText={setNewTodo}
        style={{
          marginBottom: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "gray",
          width: 200,
        }}
      />
      <Button title="Add TODO" onPress={addTodo} color="green" />
      <Button title="Clear TODO List" onPress={clearTodoList} color="red" />
      <Text>{todoList.join("\n")}</Text>
    </View>
  );
}

function CompletedTodoScreen() {
  return <Text>Completed TODO</Text>;
}
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TODO" component={CreateTodoScreen} />
      <Tab.Screen name="Completed" component={CompletedTodoScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

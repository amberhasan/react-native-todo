import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function CreateTodoScreen() {
  let [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const createTodoItem = (value) => {
    return {
      id: Math.random() * 100 + 1,
      name: value,
      completed: false,
    };
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      todoList = [...todoList, createTodoItem(todoValue)];
      setTodoList(todoList); //make the current list include the todo, //setTodoList((todoList) => [...todoList, newTodo]);
      setTodoValue(""); //make the current newTodo be empty string
    }
  };

  const clearTodoList = () => {
    setTodoList([]);
  };

  //device 320

  return (
    <View style={{ flex: 1, backgroundColor: "lightpink", padding: 10 }}>
      <View
        style={{
          flex: 0,
          backgroundColor: "lightgreen",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{ borderColor: "gray", borderWidth: 2, margin: 10, flex: 1 }}
        />
        <Button title="Add" />
      </View>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
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

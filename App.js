import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function CreateTodoScreen() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const createTodoItem = (value) => {
    return {
      id: Math.random() * 100 + 1,
      name: value,
      completed: false,
    };
  };

  const addTodo = () => {
    if (todoValue.trim() !== "") {
      const newTodo = createTodoItem(todoValue);
      setTodoList([...todoList, newTodo]);
      setTodoValue("");
    }
  };

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
          value={todoValue}
          onChangeText={setTodoValue}
        />
        <Button title="Add" onPress={addTodo} />
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

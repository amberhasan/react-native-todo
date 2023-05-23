import React, { useState } from "react";
import { Text, View, Button, TextInput, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function CreateTodoScreen() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const createTodoItem = (value) => {
    return {
      id: parseInt(Math.random() * 100 + 1, 10),
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

  const toggleCompleteButton = (todoItem) => {
    const newTodoList = todoList.map((item) => {
      if (item.id == todoItem.id) {
        return {
          ...item,
          completed: !todoItem.completed,
        };
      } else {
        return item;
      }
    });
    setTodoList(newTodoList);
  };

  const TodoItem = (props) => {
    return (
      <View style={{ flexDirection: "row", padding: 2 }}>
        <Text
          style={{
            flex: 1,
            backgroundColor:
              props.completed == true ? "lightgreen" : "lightpink",
            textAlignVertical: "center",
            textAlign: "center",
          }}
        >
          {props.name}
        </Text>
        <Button
          title={props.completed == true ? "Complete" : "Not Complete"}
          onPress={() => {
            toggleCompleteButton(props);
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
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
          style={{
            borderColor: "gray",
            borderWidth: 2,
            margin: 10,
            flex: 1,
            paddingLeft: 10,
          }}
          value={todoValue}
          onChangeText={setTodoValue}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <TodoItem
              key={item.id}
              id={item.id}
              name={item.name}
              completed={item.completed}
            />
          )}
        />
      </View>
    </View>
  );
}

function CompletedTodoScreen() {
  return (
    <View>
      <Text>Completed TODO</Text>
      <Text>Completed TODO</Text>
    </View>
  );
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

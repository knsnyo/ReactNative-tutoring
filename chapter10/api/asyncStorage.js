import AsyncStorage from "@react-native-async-storage/async-storage";

export const addData = async (newTodo) => {
  try {
    // 여기 가져와서 수정
    const load = await AsyncStorage.getItem("todos");
    const data = JSON.parse(load || "{}");
    let update;
    if (load !== null) {
      update = [...data, newTodo];
    } else {
      update = [newTodo];
    }
    await AsyncStorage.setItem("todos", JSON.stringify(update));
  } catch (err) {
    console.log(err);
  }
};

export const deleteData = async (id) => {
  try {
    const load = await AsyncStorage.getItem("todos");
    const data = JSON.parse(load || "{}");
    const deletedTodo = data.filter((todo) => todo.id !== id);
		await AsyncStorage.setItem("todos", JSON.stringify(deletedTodo));
  } catch (err) {
    console.log(err);
  }
};

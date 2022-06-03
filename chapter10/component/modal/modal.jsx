import { useContext, useState } from "react";
import { View, TextInput } from "react-native";
import Modal from "react-native-modal";
import { styles } from "./style";
import { Context } from "../../context/Context";
import uuid from "uuid-random";
import { addData, updateData } from "../../api/asyncStorage";

export default () => {
  const { state, dispatch } = useContext(Context);
  const [text, setText] = useState("");

  const hide = async () => {
    if ("add" === state.modal.mode) {
      if ("" !== text) {
        const newTodo = {
          id: uuid(),
          text: text,
        };
        dispatch({ type: "ADD", payload: newTodo });
        addData(newTodo);
      }
    } else if ("edit" === state.modal.mode) {
      if("" !== text){
        const editTodo = {
          id: state.modal.id,
          text: text,
        };
        dispatch({ type: "UPDATE", payload: editTodo });
        updateData(editTodo);
      }
    }
    dispatch({ type: "MODAL_END" });
    setText("");
  };

  const placeholder = state.modal.mode === "add" ? "할 일 추가" : "할 일 변경";

  return (
    <Modal
      isVisible={state.modal.isVisible}
      onBackdropPress={hide}
      avoidKeyboard
      style={styles.modal}
    >
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => setText(text)}
          onEndEditing={(text) => setText(text)}
          onSubmitEditing={hide}
          value={text}
          blurOnSubmit={true}
        />
      </View>
    </Modal>
  );
};

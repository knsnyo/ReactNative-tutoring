import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default (props) => {
  const [point, setPoint] = useState(props.point);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setPoint(1)}>
        {point >= 1 ? (
          <Icon name="star" size={15} color={"yellow"} />
        ) : (
          <Icon name="staro" size={15} color={"yellow"} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPoint(2)}>
        {point >= 2 ? (
          <Icon name="star" size={15} color={"yellow"} />
        ) : (
          <Icon name="staro" size={15} color={"yellow"} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPoint(3)}>
        {point >= 3 ? (
          <Icon name="star" size={15} color={"yellow"} />
        ) : (
          <Icon name="staro" size={15} color={"yellow"} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPoint(4)}>
        {point >= 4 ? (
          <Icon name="star" size={15} color={"yellow"} />
        ) : (
          <Icon name="staro" size={15} color={"yellow"} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setPoint(5)}>
        {point >= 5 ? (
          <Icon name="star" size={15} color={"yellow"} />
        ) : (
          <Icon name="staro" size={15} color={"yellow"} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

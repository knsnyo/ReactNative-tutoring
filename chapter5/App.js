import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/AntDesign";

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("knsnyo");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}`
    );
    setData(res.data.items);
    setLoading(false);
  };

  const handleSearch = () => {
    setLoading(true);
    getData();
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          onChangeText={(e) => setSearch(e)}
          placeholder="input"
          value={search}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Icon name="search1" size={15} />
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator />}
      <View style={styles.itemList}>
        <ScrollView>
          {data.map((user) => {
            console.log(user.avatar_url);
            return (
              <View key={user.id} style={styles.item}>
                <Image
                  source={{ uri: user.avatar_url }}
                  style={{ width: 50, height: 50 }}
                />
                <Text>{user.login}</Text>
                <Button
                  onPress={() => {
                    Linking.openURL(user.html_url);
                  }}
                  title="view"
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemList: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 10,
  },
});

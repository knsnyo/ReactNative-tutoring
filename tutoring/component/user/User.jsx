import { View, Image, Text } from "react-native";
import { styles } from "./style";
import Profile from "./Profile.jpg";
import Icon from "react-native-vector-icons/AntDesign"

export default ({student}) => {
  return (
		<View style={styles.user}>
      <View style={styles.userPicture}>
        <Image style={styles.userprofile} source={Profile} resizeMode="contain"/>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{student.name}</Text>
        <Text>{student.msg}</Text>
      </View>
      <View style={styles.userMusic}>
        <Text style={styles.melon}>
          {student.music}{" "}<Icon name={"caretright"}/>
        </Text>
      </View>
    </View>
  );
};

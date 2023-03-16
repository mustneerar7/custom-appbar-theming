import { TouchableOpacity, View } from "react-native";

import Icon from "@expo/vector-icons/MaterialIcons";

const ButtonRegular = ({navFunction}) => {
  return (
    <TouchableOpacity onPress={navFunction}>
      <View
        style={{
          width: 200,
          height: 80,
          backgroundColor: "#7A8B99",
          borderRadius: 8,
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="settings" size={30} color={"white"} />
      </View>
    </TouchableOpacity>
  );
};

export { ButtonRegular };
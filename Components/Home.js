import { useLayoutEffect } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { ButtonRegular } from "./Buttons/ButtonRegular";

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Welcome",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ButtonRegular
        navFunction={() => {
          navigation.navigate("Settings");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#7A8B99",
  },
});

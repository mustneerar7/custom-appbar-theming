import { useLayoutEffect } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

import { BackButton } from "./Buttons/BackButton";

export default function Settings({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginRight: 20 }}>
          <BackButton
            backFuunction={() => {
              navigation.pop();
            }}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontFamily: "monospace", margin: 20 }}>
        Your settings will appear here.
      </Text>
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
});

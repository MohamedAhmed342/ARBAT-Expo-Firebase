import { StyleSheet, Text, View } from "react-native";
import React from "react";

const page = () => {
  return (
    <View style={styles.container}>
      <Text>cart</Text>
    </View>
  );
};

export default page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

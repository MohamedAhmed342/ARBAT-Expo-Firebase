import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CategoryButtons from "@/components/CategoryButtons";
import Listings from "@/components/Listings";
import perfumeData from "@/data/perfumeData.json";

const page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");
  const onCatChanged = (category: string) => {
    // Change from String to string
    console.log("category", category);
    setCategory(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=male",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: "color: #171717",
                borderRadius: 10,
                padding: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              <Ionicons name="notifications" size={30} color="color: #fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={18}
              style={{ marginRight: 5 }}
              color={Colors.black}
            />
            <TextInput placeholder="Search..." />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterbtn}>
            <Ionicons name="options" size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <CategoryButtons onCategorychange={onCatChanged} />
        <Listings listings={perfumeData} category={category} />
      </View>
    </>
  );
};

export default page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgcolor,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
    // width: "100%",
    // height: 50,
  },

  searchBar: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5,
    // marginVertical: 10,
    // marginHorizontal: 10,
    width: "100%",
    height: 50,
  },
  filterbtn: {
    backgroundColor: "#007bff",
    borderRadius: 10,
    padding: 12,
    // shadowColor: "#171717",
    // shadowOffset: { width: 2, height: 4 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // // elevation: 5,
    marginLeft: 10,
    // // marginHorizontal: 10,
    // width: 50,
    // height: 50,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

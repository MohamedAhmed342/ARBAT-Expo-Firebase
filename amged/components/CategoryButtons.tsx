import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import perfumeCategories from "@/data/perfumeCategories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";

type Props = {
  onCategorychange: (category: string) => void;
};

const CategoryButtons = ({ onCategorychange }: Props) => {
  const itemRef = useRef<TouchableOpacity[] | null>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    setActiveIndex(index);

    onCategorychange(perfumeCategories[index].title);
  };

  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {perfumeCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            // ref={(el) => (itemRef.current[index] = el)}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex == index
                ? styles.CategoryBtnActive
                : styles.CategoryBtn
            }
          >
            <Text
              style={
                activeIndex == index ? styles.TextStyleActive : styles.TextStyle
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.black,
    padding: 10,
  },
  CategoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
  },
  TextStyle: {
    color: Colors.black,
  },
  CategoryBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#daa520",
    shadowColor: Colors.black,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
  },
  TextStyleActive: {
    color: Colors.white,
  },
});

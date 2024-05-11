import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ListingType } from "@/types/listingType";
import perfumeData from "@/data/perfumeData.json";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;
const ListingDetails = () => {
  const { id } = useLocalSearchParams();
  const listing: ListingType = (perfumeData as ListingType[]).find(
    (item) => item.id === id
  );

  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "rgba(255,255,255,0,5)",
                padding: 4,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Image source={{ uri: listing.image }} style={styles.image} />
        <View style={styles.container2}>
          <Text style={styles.name}>{listing.name}</Text>
          <View>
            <FontAwesome5 name="star" size={30} color={"#daa520"} />
            <Text style={styles.rating2}>{listing.rating}</Text>
          </View>
          <Text style={styles.price2}>${listing.price}</Text>
        </View>
        <Text style={styles.description}> {listing.description}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}} style={styles.footerBtn}>
          <Text style={styles.footerBtnText}> Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  rating2: {
    flexDirection: "row",
    fontSize: 30,
    marginLeft: 35,
    marginBottom: 10,
    marginTop: -35,
  },
  name: {
    fontSize: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    padding: 10,
  },
  price2: {
    flexDirection: "row",
    fontSize: 30,
    marginLeft: 250,
    marginBottom: 10,
    marginTop: -50,
    color: "#daa520",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  container2: {
    padding: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    paddingBottom: 30,
    backgroundColor: "#daa520",
    width: width,
  },
  footerBtn: {
    flex: 1,
    padding: 1,
    borderRadius: 1,
    alignItems: "center",
    margin: 4,
  },
  footerBtnText: {
    fontSize: 17,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

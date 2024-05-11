// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { ListingType } from "@/types/listingType";
// import { FontAwesome5, Ionicons } from "@expo/vector-icons";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import { Link } from "expo-router";

// type Props = {
//   listings: any[];
//   category: string;
// };

// const Listings = ({ listings, category }: Props) => {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     console.log("Update Listings");
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//     }, 200);
//   }, [category]);
//   const renderItem = ({ item }: { item: ListingType }) => {
//     return (
//       <Link href={`/listing/${item.id}`} asChild>
//         <TouchableOpacity>
//           <View style={styles.item}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <Text style={styles.name}>{item.name}</Text>
//             <View style={styles.cart}>
//               <Ionicons name="cart-outline" size={20} color={"white"} />
//             </View>
//             <View
//               style={{ flexDirection: "row", justifyContent: "space-between" }}
//             >
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 <FontAwesome5 name="star" size={18} color={"#daa520"} />
//                 <Text style={styles.rating}>{item.rating}</Text>
//               </View>
//               <Text style={styles.price}>${item.price}</Text>
//             </View>
//           </View>
//         </TouchableOpacity>
//       </Link>
//     );
//   };

//   return (
//     <View>
//       <FlatList
//         data={loading ? [] : listings}
//         renderItem={renderItem}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// export default Listings;

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: "white",
//     padding: 10,
//     borderRadius: 10,
//     marginRight: 20,
//     width: 220,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 30,
//   },
//   cart: {
//     position: "absolute",
//     right: 10,
//     top: 185,
//     backgroundColor: "#daa520",
//     padding: 10,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: "white",
//     shadowColor: "#171717",
//     shadowOffset: { width: 2, height: 4 },
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "black",
//     textAlign: "center",
//   },
//   rating: {
//     fontSize: 12,
//     marginLeft: 5,
//   },
//   price: {
//     fontSize: 12,
//     fontWeight: "600",
//     color: "#daa520",
//   },
// });

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListingType } from "@/types/listingType";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Link } from "expo-router";

type Props = {
  listings: ListingType[];
  category: string;
};

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState<ListingType[]>([]);

  useEffect(() => {
    setLoading(true);

    // Filter data based on category
    if (category === "All") {
      setFilteredData(listings);
    } else if (category === "Men") {
      setFilteredData(listings.slice(0, 11)); // Show first 11 items
    } else if (category === "Women") {
      setFilteredData(listings.slice(-4)); // Show last 4 items
    }

    setLoading(false);
  }, [category, listings]);

  const renderItem = ({ item }: { item: ListingType }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.cart}>
              <Ionicons name="cart-outline" size={20} color={"white"} />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5 name="star" size={18} color={"#daa520"} />
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View>
      <FlatList
        data={loading ? [] : filteredData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  cart: {
    position: "absolute",
    right: 10,
    top: 185,
    backgroundColor: "#daa520",
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "black",
    textAlign: "center",
  },
  rating: {
    fontSize: 12,
    marginLeft: 5,
  },
  price: {
    fontSize: 12,
    fontWeight: "600",
    color: "#daa520",
  },
});

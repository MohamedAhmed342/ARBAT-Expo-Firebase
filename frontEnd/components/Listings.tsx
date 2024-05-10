// import {FlatList, StyleSheet, Text, View } from "react-native";
// import React from "react";
// type Props={
//     listings: any[]
// }
// const Listings = ({listings}: Props) => {
// const renderItem ={{item}} => {
//     return(
//         <View>
//             <Text>{item.name}</Text>
//         </View>
//     );
// }
//   return (
//     <View>
//       <FlatList
//         data={listings}
//         renderItem={({renderItem}) />

//     </View>
//   );
// }

// export default Listings;

// const styles = StyleSheet.create({});

import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

// type Listing = {
//   name: string;
// };

type Props = {
  listings: any[];
};

const Listings = ({ listings }: Props) => {
  const renderItem: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <TouchableOpacity>
        <View>
          <Image
            source={{ uri: item.image }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={listings}
        renderItem={renderItem} // Removed unnecessary curly braces
        keyExtractor={(item) => item.name} // Assuming 'name' is unique for each item
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({});
  
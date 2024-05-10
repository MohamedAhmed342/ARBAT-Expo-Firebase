import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import User from '../routes/user'; 

const ProfileScreen = () => {
  const [showUser, setShowUser] = useState(false);

  const handleEditPress = () => {
    setShowUser(!showUser);
  };

  const handleBackPress = () => {
    setShowUser(false);
  };

  return (
    <View style={styles.container}>
      {!showUser && (
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.name}>Mohamed Ahmed</Text>
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.info}>myasd200210@gmail.com</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.info}>01120858144</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Date of Birth:</Text>
            <Text style={styles.info}>June 16, 2002</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.info}>114 Ali Farghali Street _ imbaba - giza</Text>
          </View>
          <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      )}
      {showUser ? <User onBackPress={handleBackPress} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bgColor,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: Colors.goldenrod,
  },
  profileInfo: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 17,
    width: 120, 
  },
  info: {
    flex: 1,
    fontSize: 15,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 10,
    marginTop: 20,
  },
  editButton: {
    backgroundColor: Colors.goldenrod,
    marginTop:20,
    marginRight:130,
    marginLeft:130,
    paddingVertical: 0,
    borderRadius: 20,
    alignItems: 'center',
  },
  editButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProfileScreen;

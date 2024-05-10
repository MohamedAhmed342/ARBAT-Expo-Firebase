  import Colors from '@/constants/Colors';
import React, { useState } from 'react';
  import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

  const User = ({ onBackPress }) => {
    const [user, setUser] = useState({
      firstName: "John",
      lastName: "Doe",
      day: "16",
      month: "06",
      year: "2002",
      email: "myasd200210@gmail.com",
      phone: "1234567890",
      password: "01120858144", // 
      profileImage: "https://xsgames.co/randomusers/avatar.php?g=male", // Default profile image URL
      // Add more fields as needed
    });
    const [editable, setEditable] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State to control password visibility
    const [editing, setEditing] = useState(false);

    const handleChange = (field, value) => {
      setUser({ ...user, [field]: value });
    };

    const handleEdit = () => {
      setEditable(true);
      setEditing(true);
    };

    const handleSave = () => {
      setEditable(false);
      // Here you can add logic to save the updated user data
    };

    const handleImageChange = () => {
      // Implement image change logic here
    };

    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleImageChange} style={styles.profileImageContainer}>
            <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
          
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            value={user.firstName}
            onChangeText={(text) => handleChange('firstName', text)}
            editable={editable}
            placeholder="Enter your first name"
          />
          
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            value={user.lastName}
            onChangeText={(text) => handleChange('lastName', text)}
            editable={editable}
            placeholder="Enter your last name"
          />
          
          <View style={styles.dateContainer}>
            <Text style={styles.label}>Date of Birth:</Text>
            <View style={styles.dateInputs}>
              <TextInput
                style={[styles.input, styles.dateInput]}
                value={user.day}
                onChangeText={(text) => handleChange('day', text)}
                editable={editable}
                placeholder="DD"
                keyboardType="numeric"
                maxLength={2}
              />
              <TextInput
                style={[styles.input, styles.dateInput]}
                value={user.month}
                onChangeText={(text) => handleChange('month', text)}
                editable={editable}
                placeholder="MM"
                keyboardType="numeric"
                maxLength={2}
              />
              <TextInput
                style={[styles.input, styles.dateInput]}
                value={user.year}
                onChangeText={(text) => handleChange('year', text)}
                editable={editable}
                placeholder="YYYY"
                keyboardType="numeric"
                maxLength={4}
              />
            </View>
          </View>
          
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            style={styles.input}
            value={user.phone}
            onChangeText={(text) => handleChange('phone', text)}
            editable={editable}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
          
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={user.email}
            onChangeText={(text) => handleChange('email', text)}
            editable={editable}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          
          <Text style={[styles.label, styles.passwordLabel]}>Password:</Text>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            value={user.password}
            onChangeText={(text) => handleChange('password', text)}
            secureTextEntry={!showPassword} // Show password if showPassword is false
            editable={editable}
            placeholder="Enter your password"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.editButton]} onPress={handleEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.backButton]} onPress={onBackPress}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          {editable && (
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50, 
      paddingHorizontal: 20,
    },
    container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    button: {
      width: '100%',
      height: 40,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    editButton: {
      backgroundColor: Colors.goldenrod,
    },
    saveButton: {
      backgroundColor: '#4CAF50',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    dateContainer: {
      width: '100%',
    },
    dateInputs: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    dateInput: {
      flex: 1,
      marginRight: 5,
      height: 40,
    },
    passwordLabel: {
      marginTop: 15,
    },
    passwordInput: {
      height: 40,
    },
    showPasswordText: {
      marginTop: 5,
      color: Colors.goldenrod,
    },
    profileImageContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    profileImage: {
      width: 130,
      height: 130,
      borderRadius: 65,
      marginBottom: 10,
      marginTop: -20,
    },
    changePhotoText: {
      color: Colors.goldenrod,
      fontWeight: 'bold',
    },
    backButton: {
      backgroundColor: Colors.goldenrod, 
    },  
  });

  export default User;

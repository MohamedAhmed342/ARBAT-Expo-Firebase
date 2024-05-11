import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import KeyView from '../components/KeyView'; 
import { useAuth } from './context/authcontext';
export default function SignUP() {
    const router = useRouter();
    const {register}=useAuth();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const usernameRef = useRef("");
    const profileRef = useRef("");

    const handleRegister = async () => {
        if (!emailRef.current.trim() || !passwordRef.current.trim() || !usernameRef.current.trim() || !profileRef.current.trim()) {
            Alert.alert('Sign Up', "Please fill in all fields!");
            return;
        }
       // setLoading(true);
       let response =await register(emailRef.current,passwordRef.current,usernameRef.current,profileRef.current);
        // setLoading(false);
        console.log('got result:',response);
        if(!response.success){

            Alert.alert('Sign Up', response.msg);
        }
    }

    return (

      <KeyView>      
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <StatusBar style='dark' />
            <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5), justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: hp(50), width: wp(110) }} resizeMode='contain' source={require('../assets/images/Gray5.png')} />
            </View>

            {/* Existing email input */}
            <View style={styles.inputContainer}>
                <Octicons name='mail' size={hp(2.7)} color="goldenrod" style={styles.icon} />
                <TextInput onChangeText={value => emailRef.current = value} placeholder="Email" style={styles.input} placeholderTextColor="gray" />
            </View>

            {/* Existing password input */}
            <View style={styles.inputContainer}>
                <Octicons name='lock' size={hp(2.7)} color="goldenrod" style={styles.icon} />
                <TextInput secureTextEntry onChangeText={value => passwordRef.current = value} placeholder="Password" style={styles.input} placeholderTextColor="gray" />
            </View>

            {/* New input field for Username */}
            <View style={styles.inputContainer}>
                <Octicons name='person' size={hp(2.7)} color="goldenrod" style={styles.icon} />
                <TextInput onChangeText={value => usernameRef.current = value} placeholder="Username" style={styles.input} placeholderTextColor="gray" />
            </View>

            {/* New input field for Profile */}
            <View style={styles.inputContainer}>
                <Octicons name='person' size={hp(2.7)} color="goldenrod" style={styles.icon} />
                <TextInput onChangeText={value => profileRef.current = value} placeholder="Profile" style={styles.input} placeholderTextColor="gray" />
            </View>

            {/* Sign up button */}
            <TouchableOpacity onPress={handleRegister} style={[styles.signinButton, { backgroundColor: 'goldenrod' }]}>
                <Text style={styles.signinText}>Sign up</Text>
            </TouchableOpacity>

            {/* Sign in text */}
            <View>
                <Text style={styles.sss}>Sign UP</Text>
            </View>

            {/* Already have an account? Sign in */}
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text>Already have an account ? </Text>
                <Pressable onPress={() => router.push('signin')}>
                    <Text style={{ fontWeight: 'bold', color: 'goldenrod' }}>Sign in</Text>
                </Pressable>
            </View>
            
        </View>
        </KeyView>

        
    );
}

const styles = StyleSheet.create({
    sss: {
        marginTop: -400,
        fontSize: 30,
        color: "#65451F",
        fontWeight: "bold"
    },
    signinButton: {
        marginTop: 20,
        height: hp(6.5),
        borderRadius: hp(6.5) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(70), // Adjust the width as needed
    },
    signinText: {
        fontSize: 20,
        color: 'white', // Default color for the button text
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 4,
        paddingHorizontal: 5,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 10,
    },
    icon: {
        marginRight: 5,
    },
    input: {
        flex: 0.9,
        fontSize: hp(2.5),
        height: hp(6),
    },
});

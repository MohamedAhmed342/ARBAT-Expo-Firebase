import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import KeyView from '../components/KeyView'; 
import { useAuth } from './context/authcontext';

export default function Signin() {
    // Define input or remove the reference if not needed
    const router = useRouter();

    const emailRef = useRef("");
    const passwordRef = useRef("");

    const {login}= useAuth();

    const handleLogin = async () => {
        if (!emailRef.current.trim() || !passwordRef.current.trim()) {
            Alert.alert('Sign In', "Please fill in all fields!");
            return;
        }

        const response =await login(emailRef.current,passwordRef.current);
        if(!response.success){
            Alert.alert('Sign In',response.msg);
        }
    }

    return (
        <KeyView>

        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <StatusBar style='dark' />
            {/* Image */}
            <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5), justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: hp(50), width: wp(110) }} resizeMode='contain' source={require('../assets/images/Gray5.png')} />
            </View>

            {/* Email input */}
            <View style={{ flexDirection: 'row', gap: 4, paddingHorizontal: 5, backgroundColor: '#f4f4f4', alignItems: 'center', borderRadius: 100 }}>
                <Octicons name='mail' size={hp(2.7)} color="goldenrod" style={{ marginRight: 5 }} />
                <TextInput onChangeText={value => emailRef.current = value} placeholder="Email" style={{ flex: 0.9, fontSize: hp(2.5), height: hp(6) }} placeholderTextColor="gray" />
            </View>

            {/* Password input with a small gap */}
            <View style={{ flexDirection: 'row', gap: 4, paddingHorizontal: 5, backgroundColor: '#f4f4f4', alignItems: 'center', borderRadius: 100, marginTop: 10 }}>
                <Octicons name='lock' size={hp(2.7)} color="goldenrod" style={{ marginRight: 5 }} />
                <TextInput secureTextEntry onChangeText={value => passwordRef.current = value} placeholder="Password" style={{ flex: 0.9, fontSize: hp(2.5), height: hp(6) }} placeholderTextColor="gray" />
            </View>

            {/* Forget Password text with a small gap */}
            <Text style={{ fontSize: hp(1.9), fontWeight: "bold", color: "gray", marginTop: 5 }}>Forget Password ?</Text>

            {/* Sign in text */}

            {/* Sign in button */}
            <TouchableOpacity onPress={handleLogin} style={[Styles.signinButton, { backgroundColor: 'goldenrod' }]}>
                <Text style={Styles.signinText}>Sign in</Text>
            </TouchableOpacity>
            <View>
                <Text style={Styles.sss}>Sign in</Text>
            </View>

            {/* Don't have an account? Sign Up */}
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text>Don't have an account ? </Text>
                <Pressable onPress={() => router.push('signUp')}>
                    <Text style={{ fontWeight: 'bold', color: 'goldenrod' }}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
        </KeyView>

    );
}

const Styles = StyleSheet.create({
    sss: {
        marginTop: -300,
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
});


/*


*/ 
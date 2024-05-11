import {View,Text, Pressable} from 'react-native'
import React from 'react' 
import { useAuth } from './context/authcontext';
import { Button } from 'react-native-web';

export default function Admin(){
    
    return(
        <View >
          <Text>Admin</Text>
        
        </View>


    )


}











/*import {View,Text, Pressable} from 'react-native'
import React from 'react' 
import { useAuth } from '../context/authcontext';
import { Button } from 'react-native-web';

export default function home(){
    const {logout,user} =useAuth();

    const handleLogout =async ()=>{
      await logout();
    }
    console.log('userdata',user);
    return(
        <View >
          <Text>homeeeeeeefsdlxjljxlkjlkj</Text>
         
        <Pressable onPress={handleLogout}>
          <Text>Sign out</Text>
        </Pressable>


        </View>


    )


}*/ 
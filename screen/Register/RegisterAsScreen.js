// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
 Text,
  StyleSheet,
  View,
  Image
 
} from 'react-native';

import { CustomButton } from '../../SharedComponents/customButton';


const RegisterAsScreen = ({navigation}) => {
  

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
 <View style={{marginHorizontal:26,marginTop:16}}>
     <Image
        style={styles.introLogoStyle}
        resizeMode='contain'
        source={require('../../assets/asli_red_logo.png')} />

        <Image
        style={styles.introLoginDoodleStyle}
        resizeMode='contain'
        source={require('../../assets/login_doodle1.png')} />

        <Text style={styles.textDescriptionStyle}>
        Please register using your email and mobile 
        number to continue using our application.
        </Text>

        <View style={{marginTop:30}}>

        <CustomButton
            activeOpacity={0.5}
            buttonName="REGISTER AS BUYER"
            onPress={()=>{navigation.navigate("RegisterAsBuyer")}}
          />

        <CustomButton
            activeOpacity={0.5}
            buttonName="REGISTER AS STORE"
            onPress={()=>{navigation.navigate("RegisterAsStore")}}
          />
        </View>
       
   </View>
        <Text style={{alignSelf:'center', fontWeight:'300',fontSize:16,position:'absolute',bottom:25,}}>
          Already have an account? 
        <Text 
        style={{color:"#D03B30", fontWeight:'400'}}
         onPress={()=>{navigation.navigate("LoginPage")}}> 
         Login
         </Text>
        </Text>
    </View>
  
  );
};

const styles = StyleSheet.create({
    introLogoStyle: {
        width:"100%",
        height: 60,
        marginTop:80,
        alignSelf:'center'
      },
      introLoginDoodleStyle: {
        width: "100%",
        marginTop:30,
        alignSelf:'center',
      },
      textDescriptionStyle: {
        alignSelf:'center',
        textAlign:'center',
        fontSize:17,
        marginTop:30,
        fontWeight:'300',
      },
})

export default RegisterAsScreen;


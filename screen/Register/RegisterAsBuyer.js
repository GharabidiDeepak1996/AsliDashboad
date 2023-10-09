import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputText from '../../SharedComponents/InputText';
import { useForm, Controller } from "react-hook-form";
import { CustomButton } from '../../SharedComponents/customButton';

export default function RegisterAsBuyer() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("pressed")
  };

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <View style={{margin:16}}>
          <InputText
            name="Mobile No"
            label = "Mobile No."
            control={control}
            keyboardType="numeric"
            hint="Enter mobile no."
            rules={{
              required: "Please enter mobile number",
              minLength: {
                value: 10,
                message: "Mobile should be 10 characters long",
              },
              
            }}
          />

<InputText
            name="Email"
            label = "Email Address"
            control={control}
            
            hint="Enter email address"
            rules={{
              required: "Please enter email",
              minLength: {
                value: 3,
                message: "Email should be minimum 3 characters long",
              },
            }}
          />

<InputText
            name="Password"
            label = "Password"
            control={control}
            hint="Enter password"
            secureTextEntry
            rules={{
              required: "Please enter password",
              minLength: {
                value: 5,
                message: "Password should be minimum 5 characters long",
              },
            }}
          />

          
<InputText
            name="Confirm Password"
            label = "Confirm Password"
            control={control}
            hint="Retype password"
            secureTextEntry
            rules={{
              required: "Please enter password",
              minLength: {
                value: 5,
                message: "Password should be minimum 5 characters long",
              },
            }}
          />

<InputText
            name="Name"
            label = "Full Name"
            control={control}
            hint="Enter full name"
            rules={{
              required: "Please enter full name",
              minLength: {
                value: 3,
                message: "full name should be minimum 3 characters long",
              },
            }}
          />

<InputText
            name="address"
            label = "Complete Address"
            control={control}
            inputheight={70}
            hint="Complete Address"
            rules={{
              required: "Please enter complete address",
              minLength: {
                value: 3,
                message: "Address should be minimum 3 characters long",
              },
            }}
          />

<InputText
            name="city"
            label = "City"
            control={control}
            hint="City"
            rules={{
              required: "Please select city",
            }}
          />

<CustomButton
            activeOpacity={0.5}
            buttonName="REGISTER BUYER ACCOUNT"
           onPress={handleSubmit(onSubmit)}
          />
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

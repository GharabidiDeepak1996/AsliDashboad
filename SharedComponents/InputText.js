import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

const InputText = ({
  text,
  control,
  name,
  label,
  inputheight,
  hint,
  rules = {},
  placeholder,
  secureTextEntry,
  keyboardType,
  defaultValue,
}) => {
  return (
    <View>
         <Text style={{marginTop:8,marginBottom:4,marginLeft:3,fontWeight:400,color:"dimgray"}}>{label}</Text>
         <Controller
      name={name}
      //defaultValue=""
      value={"text"}
      defaultValue={text}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View>
            <TextInput
              value={value}
              defaultValue={defaultValue}
              //onChange={}
              onChangeText={onChange}
              cursorColor={"#D03B30"}
              onBlur={onBlur}
                placeholder={hint}
                placeholderTextColor={"#E0E0E0"}
              style={[
                styles.textInputBox,{height: inputheight},
                { borderColor: error ? "#D03B30" : "#E0E0E0" },
              ]}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
            />
          </View>
          {error && (
            <Text style={styles.errorText}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />
    </View>
   
  );
};

const styles = StyleSheet.create({
  textInputBox: {
    paddingStart: 10,
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingVertical: 6,
    marginBottom: 0,
  },
  errorText: {
    color: "#D03B30",
    marginLeft:3,
    fontWeight:'300'
    //alignSelf: "stretch"
  },
});

export default InputText;

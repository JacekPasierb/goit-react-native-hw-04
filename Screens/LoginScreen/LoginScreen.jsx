import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import imageBG from "../../assets/PhotoBG.jpg";

import {
  Background,
  BoxInputs,
  ButtonText,
  Container,
  FormRegister,
  Input,
  NavText,
  StyledButton,
  Title,
} from "./LoginScreen.styled";

const LoginScreen = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const passwShow = () => alert(`Your password is: ${password}`);

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert("Enter all data place!!!");
      return;
    }
    console.log(` Email: ${email}, Password: ${password}`);
  };

  return (
    <>
      <Background source={imageBG} resizeMode="cover">
        <FormRegister>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <Container>
                <Title>Sign in</Title>

                <BoxInputs>
                  <Input
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Email"
                  />
                  <Input
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                    maxLength={8}
                    secureTextEntry={true}
                  />
                  <TouchableOpacity
                    style={styles.passwShow}
                    activeOpacity={0.5}
                    onPress={passwShow}
                  >
                    <Text style={styles.passwShowText}>Show</Text>
                  </TouchableOpacity>
                </BoxInputs>

                <StyledButton activeOpacity={0.5} onPress={onLogin}>
                  <ButtonText>Sign in</ButtonText>
                </StyledButton>
                <NavText>
                  Don't have an account?
                  <Text>Register now</Text>
                </NavText>
              </Container>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </FormRegister>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  passwShow: {
    top: -68,
    left: 280,
  },
  passwShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default LoginScreen;

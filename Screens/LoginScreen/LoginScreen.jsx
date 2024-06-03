import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
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

  const onRegister = () => {
    Alert.alert("Credentials", `${login} + ${password}`);
  };

  return (
    <>
      <Background source={imageBG} resizeMode="cover">
        <FormRegister>
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
              />
              <TouchableOpacity
                style={styles.passwShow}
                activeOpacity={0.5}
                onPress={passwShow}
              >
                <Text style={styles.passwShowText}>Show</Text>
              </TouchableOpacity>
            </BoxInputs>
            <StyledButton activeOpacity={0.5} onPress={onRegister}>
              <ButtonText>Sign in</ButtonText>
            </StyledButton>
            <NavText>
              Don't have an account?
              <Text>Register now</Text>
            </NavText>
          </Container>
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

import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import imageBG from "../../assets/PhotoBG.jpg";
import addBtnImage from "../../assets/add.jpg";
import {
  AddButton,
  Background,
  BoxAvatar,
  BoxInputs,
  ButtonText,
  Container,
  FormRegister,
  Input,
  NavText,
  StyledButton,
  Title,
} from "./RegistrationScreen.styled";

const RegistrationScreen = () => {
  const [login, onChangeLogin] = useState("");
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
            <BoxAvatar>
              <AddButton activeOpacity={0.5}>
                <ImageBackground
                  source={addBtnImage}
                  style={{ width: "100%", height: "100%" }}
                ></ImageBackground>
              </AddButton>
            </BoxAvatar>
            <Title>Registration</Title>
            <BoxInputs>
              <Input
                onChangeText={onChangeLogin}
                value={login}
                placeholder="Login"
              />
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
              <ButtonText>Registration</ButtonText>
            </StyledButton>
            <NavText>
              Already have an account?
              <Text>Sign in</Text>
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

export default RegistrationScreen;

import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [login, onChangeLogin] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const navigation = useNavigation();

  const passwShow = () => alert(`Your password is: ${password}`);

  const onRegister = () => {
    if (!login || !email || !password) {
      Alert.alert("Enter all data place!!!");
      return;
    }
    navigation.navigate('Home', { screen: 'PostsScreen' });
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

                <StyledButton activeOpacity={0.5} onPress={onRegister}>
                  <ButtonText>Registration</ButtonText>
                </StyledButton>
                <NavText onPress={() => navigation.navigate("Login")}>
                  Already have an account?
                  <Text>Sign in</Text>
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

export default RegistrationScreen;

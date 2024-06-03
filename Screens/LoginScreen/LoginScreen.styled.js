import styled from "styled-components";

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
`;

export const FormRegister = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const Container = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 32px;
  font-size: 30px;
  color: #212121;
`;
export const BoxInputs = styled.View`
  margin-top: 32px;
  gap: 33px;
  width: 100%;
`;

export const Input = styled.TextInput`
  background-color: #f6f6f6;

  border-radius: 8px;

  padding: 16px;
  font-style: normal;
  font-weight: 400px;
  font-size: 16px;
  line-height: 19px;
`;

export const StyledButton = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  border-radius: 100px;
  background-color: #ff6c00;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

export const NavText = styled.Text`
  margin-top: 16px;
  margin-bottom: 45px;
  font-size: 16px;
  color: #1b4371;
`;

import React, { useState } from "react";
import LoginStyle from "./styles/Login.styled";
import { login_img } from "../images/index";
import Input from "./styles/Input.styled";
import Label from "./styles/Label.styled";
import Title from "./styles/Title.styled";
import LoginContainer from "./styles/LoginContainer.Styled";
import Image from "./styles/Image.styled";
import InputContainer from "./styles/InputContainer.styled";
import {
  CheckboxWrapper,
  CheckboxInput,
  CheckboxLabel,
} from "./styles/CheckBox.styled";
import Checks from "./styles/Checks.styled";
import ChangePassword from "./styles/ChangePassword.styled";
import ChecksContainer from "./styles/ChecksContainer.styled";
import LoginButton, {
  LoginButtonA,
  LoginButtonP,
} from "./styles/LoginButton.styled";

import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

const Login = () => {
  const [checkboxToggle, setCheckboxToggle] = useState(false);
  const [checkboxToggle2, setCheckboxToggle2] = useState(false);

  return (
    <LoginStyle>
      <Image>
        <img src={login_img} alt="img" />
      </Image>
      <LoginContainer>
        <Title>Login</Title>
        <InputContainer>
          <InputContainer>
            <Label>Login ID</Label>
            <Input placeholder="Enter Login ID" />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input placeholder="Enter Password" />
          </InputContainer>
          <ChecksContainer>
            <CheckboxWrapper>
              <Checks>
                {checkboxToggle ? (
                  (
                    <GrCheckboxSelected style={{
                      margin: "0.5rem",
                      borderRadius: "4px",
                      color: "#737B86",
                    }} onClick={() => setCheckboxToggle(false)} />
                  )
                ) : (<GrCheckbox
                onClick={() => setCheckboxToggle(true)}
                style={{
                  margin: "0.5rem",
                  borderRadius: "4px",
                  color: "#737B86",
                }}
              /> )}
                {/* <CheckboxInput type="checkbox"></CheckboxInput> */}

                <CheckboxLabel style={{ color: "#737B86" }}>
                  Remember Me
                </CheckboxLabel>
              </Checks>
              <Checks>
              {checkboxToggle2 ? (
                  (
                    <GrCheckboxSelected style={{
                      margin: "0.5rem",
                      borderRadius: "4px",
                      color: "#737B86",
                    }} onClick={() => setCheckboxToggle2(false)} />
                  )
                ) : (<GrCheckbox
                onClick={() => setCheckboxToggle2(true)}
                style={{
                  margin: "0.5rem",
                  borderRadius: "4px",
                  color: "#737B86",
                }}
              /> )}
                
                {/* <CheckboxInput type="checkbox"></CheckboxInput> */}
                <CheckboxLabel style={{ color: "#737B86" }}>
                  Agree to <a href="#">Terms & Conditions</a>
                </CheckboxLabel>
              </Checks>
            </CheckboxWrapper>
            <ChangePassword>Change Password</ChangePassword>
          </ChecksContainer>
          <LoginButton>Login</LoginButton>
          <LoginButtonP>
            Don’t have an account ? <LoginButtonA> Register Here</LoginButtonA>
          </LoginButtonP>
        </InputContainer>
      </LoginContainer>
    </LoginStyle>
  );
};

export default Login;

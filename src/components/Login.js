import React, { useState } from "react";
import { login_img } from "../images/index";
import { CheckboxWrapper, CheckboxLabel } from "./styles/CheckBox.styled";
import {
  Login as LoginStyle,
  Input,
  Label,
  Title,
  LoginContainer,
  Image,
  InputContainer,
  ChangePassword,
  ChecksContainer,
  Checks,
} from "./styles/index";

import {
  LoginButton,
  LoginButtonA,
  LoginButtonP,
} from "./styles/LoginButton.styled";

import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // the work is pending this

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
            <Input
              type="password"
              id="myInput"
              placeholder="Enter Password"
            ></Input>
          </InputContainer>
          <ChecksContainer>
            <CheckboxWrapper>
              {/* Added some custom css  */}
              <Checks>
                {checkboxToggle ? (
                  <GrCheckboxSelected
                    style={{
                      margin: "0.5rem",
                      borderRadius: "4px",
                      color: "#737B86",
                    }}
                    onClick={() => setCheckboxToggle(false)}
                  />
                ) : (
                  <GrCheckbox
                    onClick={() => setCheckboxToggle(true)}
                    style={{
                      margin: "0.5rem",
                      borderRadius: "4px",
                      color: "#737B86",
                    }}
                  />
                )}
                <CheckboxLabel style={{ color: "#737B86" }}>
                  Remember Me <ChangePassword>Change Password</ChangePassword>
                </CheckboxLabel>
              </Checks>
              <Checks>
                {checkboxToggle2 ? (
                  <GrCheckboxSelected
                    style={{
                      margin: "0.5rem",
                      borderRadius: "4px",
                      color: "#737B86",
                    }}
                    onClick={() => setCheckboxToggle2(false)}
                  />
                ) : (
                  <GrCheckbox
                    onClick={() => setCheckboxToggle2(true)}
                    style={{
                      margin: "0.5rem",
                      borderRadius: "4px",
                      color: "#737B86",
                    }}
                  />
                )}

                {/* <CheckboxInput type="checkbox"></CheckboxInput> */}
                <CheckboxLabel style={{ color: "#737B86" }}>
                  Agree to <a href="#"> Terms & Conditions</a>
                </CheckboxLabel>
              </Checks>
            </CheckboxWrapper>
          </ChecksContainer>
          <LoginButton>Login</LoginButton>
          <LoginButtonP>
            Don't have an account ? <LoginButtonA> Register Here</LoginButtonA>
          </LoginButtonP>
        </InputContainer>
      </LoginContainer>
    </LoginStyle>
  );
};

export default Login;

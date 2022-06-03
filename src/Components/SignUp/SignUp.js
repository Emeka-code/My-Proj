import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImCheckboxUnchecked } from "react-icons/im";
import { BsArrowRightShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <Container>
      <Left>
        <Blur>
          <Toptext>
            <Logo>
              the good
              <br />
              network
            </Logo>
            <Line />
            <H4>we are</H4>
            <Topic>Invite only right now</Topic>
            <Text>
              10million people have join our network
              <br />
              you are invited to join our network
            </Text>
          </Toptext>
          <Downtext>
            Already have account?
            <br />
            <Link to="/SignIn" style={{ textDecoration: "none" }}>
              <span>sign in</span>
            </Link>
          </Downtext>
        </Blur>
      </Left>
      <Right>
        <Form>
          <Title>Sign Up</Title>
          <Inputs>
            <InputHolder>
              <Label>Email address</Label>
              <Input placeholder="Enter your email" type="email" />
            </InputHolder>
            <InputHolder>
              <Label>Set password</Label>
              <Input placeholder="Enter password" type="password" />
            </InputHolder>
          </Inputs>
          <CheckBox>
            <Checks>
              <ImCheckboxUnchecked />
            </Checks>
            <span>show password</span>
          </CheckBox>
          <Buttons>
            <Button>
              Sign Up{" "}
              <span>
                <BsArrowRightShort />
              </span>
            </Button>
            <Or>
              <OrLine />
              <span>Or</span>
            </Or>
            <Gbotton>
              <span>
                <FcGoogle />
              </span>
              continue with Google
            </Gbotton>
          </Buttons>
        </Form>
      </Right>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  display: flex;
`;
const Left = styled.div`
  background: blue;
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 30px 30px 0;
  background-image: url("/boy_walk.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

const Blur = styled.div`
  width: 70%;
  height: 80%;
  /* background: pink; */
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: #44473b;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Toptext = styled.div``;
const Logo = styled.div`
  background: rgba(255, 255, 255, 0.15);
  width: 100px;
  text-transform: uppercase;
  text-align: center;
  padding: 2px 0;
`;
const Line = styled.div`
  width: 40px;
  height: 1px;
  background: white;
  margin-top: 30px;
  opacity: 0.5;
`;
const H4 = styled.div`
  font-size: 16px;
  margin-top: 30px;
`;
const Topic = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const Text = styled.div`
  margin-top: 6px;
  opacity: 0.6;
`;
const Downtext = styled.div`
  font-size: 15px;
  text-decoration: none;
  span {
    font-size: 19px;
    color: white;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
  }
`;
const Form = styled.div`
  width: 70%;
  height: 80%;
  /* background-color: red; */
`;
const Title = styled.div`
  font-size: 35px;
  font-weight: 500;
`;
const Inputs = styled.div`
  margin-top: 40px;
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;
const Checks = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.4;
  cursor: pointer;
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
const InputHolder = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.div`
  font-weight: 700;
  font-size: 18px;
`;
const Input = styled.input`
  width: 96%;
  height: 50px;
  border-radius: 5px;
  padding: 0 10px;
  border: none;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  font-size: 17px;
  margin-top: 10px;
  :focus {
    outline: 1px solid rgba(0, 0, 0, 0.9);
  }
`;
const Button = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
`;
const Or = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  position: relative;
  height: 23px;
  span {
    position: absolute;
    top: 0;
    background: white;
    padding: 0 10px;
  }
`;
const OrLine = styled.div`
  width: 70%;
  height: 1px;
  background: black;
  opacity: 0.4;
`;
const Gbotton = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: red; */
  border-radius: 10px;
  /* color: red; */
  color: red;
  border: 1px solid red;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    color: red;
    margin-left: 10px;
  }
`;

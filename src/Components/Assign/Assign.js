import React from "react";
import styled from "styled-components";

const Assign = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <Imghold>
            <Img src="/boy_walk.png" alt="loading" />
          </Imghold>
          <Btnhold>
            <Btn>1</Btn>
            <Btn1>2</Btn1>
          </Btnhold>
        </Right>
        <Left>
          <Text>
            <Text1>
              Make your <br /> <span>Interior</span> looks <br /> great!
            </Text1>
            <Text2>
              make your home more comfortable and look great <br /> with the
              hight interior management
            </Text2>
          </Text>
          <Text3>
            <Text4>
              <Text5>
                see more
                <span></span>
              </Text5>
              <Num1>01</Num1>
            </Text4>
            <Dash>
              <Dash1></Dash1>
              <Dash2></Dash2>
              <Dash2></Dash2>
              <Dash2></Dash2>
            </Dash>
          </Text3>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Assign;

const Right = styled.div`
  flex: 0.6;
  /* background: red; */
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Imghold = styled.div`
  height: 600px;
  width: 600px;
  /* background: blue; */

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`;
const Btnhold = styled.div`
  height: 50px;
  width: 140px;
  /* background: red; */
  margin-top: 549px;
  margin-left: 460px;
  position: absolute;

  @media screen and (max-width: 768px) {
    position: fixed;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
`;
const Btn = styled.button`
  height: 50px;
  background: grey;
  width: 70px;
  border: 0;
  outline: none;
  color: white;
`;
const Btn1 = styled.button`
  height: 50px;
  background: black;
  border: 0;
  color: white;
  outline: none;
  width: 70px;
`;
// const Right = styled.div``;
// const Right = styled.div``;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 0.4;
  /* margin-left: 30px; */
  /* background: red; */
  height: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Text1 = styled.div`
  font-size: 60px;
  font-family: 900;
  span {
    color: orange;
  }

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;
const Text2 = styled.div`
  font-weight: 500;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
const Text3 = styled.div`
  height: 50px;
  width: 420px;
  /* background: red; */
  margin-bottom: 30px;
`;
const Text4 = styled.div`
  display: flex;
  justify-content: space-between;
  /* background: red; */
  width: 420px;
`;
const Text5 = styled.div`
  font-weight: 900;
  flex-direction: column;
  display: flex;
  span {
    margin-top: -3px;
    border-bottom: 1.5px solid black;
    width: 70px;
  }
`;
const Num1 = styled.div`
  font-weight: 900;
`;
const Dash = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
  margin-top: 20px;
`;
const Dash1 = styled.div`
  /* background: red; */
  width: 200px;
  border-bottom: 2px solid red;
`;
const Dash2 = styled.div`
  /* background: green; */
  border-bottom: 2px solid grey;
  width: 50px;
`;
const Text = styled.div`
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

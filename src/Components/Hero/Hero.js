import React from "react";
import styled from "styled-components";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiFillApple } from "react-icons/ai";

const Hero = () => {
  return (
    <Container>
      <Left>
        <LeftHolder>
          <Head>
            when we build,
            <br /> let us think that
            <br /> <span>we build forever</span>
          </Head>
          <Text>
            appropriaty faster efficient ideas after to go forward aligments.
            <br />
            monotonactly
          </Text>
          <Buttons>
            <Button1>
              <Bicon>
                <IoLogoGooglePlaystore />
              </Bicon>
              <Btext>
                <span>get from</span>
                <br />
                Google store
              </Btext>
            </Button1>
            <Button1>
              <Bicon>
                <AiFillApple />
              </Bicon>
              <Btext>
                <span>download from</span>
                <br />
                Apple store
              </Btext>
            </Button1>
          </Buttons>
        </LeftHolder>
      </Left>
      <Right>
        <RightHolder>
          <Image src="boy_walk.png" />
        </RightHolder>
        {/* <Tag></Tag> */}
      </Right>
    </Container>
  );
};

export default Hero;

const Right = styled.div`
  flex: 1;
  /* background: grey; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightHolder = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 100%;
  background: red;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;

  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;
const Tag = styled.div`
  position: absolute;
  right: 50px;
  width: 200px;
  bottom: 200px;
  height: 50px;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  background: var(--bColor);
  display: flex;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    /* margin-bottom: 30px; */
  }
`;
const Left = styled.div`
  flex: 1;
  /* background: blue; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Head = styled.div`
  font-size: 50px;
  font-weight: 700;
  text-transform: capitalize;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: orangered;
  }

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;
const Text = styled.div`
  margin-top: 30px;
  font-family: 500;
  font-size: 14px;
  opacity: 0.7;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 300px;
    text-align: center;
    margin-left: 12px;
    display: flex;
    align-items: center;
  }
`;
const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Button1 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  background: var(--buttonColor);
  color: white;
  padding: 5px 20px;
  border-radius: 5px;
`;
const Button2 = styled.div`
  font-size: 30px;
`;
const LeftHolder = styled.div``;
const Bicon = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
`;
const Btext = styled.div`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  span {
    font-size: 13px;
    font-weight: normal;
    cursor: pointer;
  }
`;

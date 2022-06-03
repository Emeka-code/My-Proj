import React from "react";
import styled from "styled-components";

const Achievement = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <H1>
            Our <span>18 Years</span> Of
            <br /> Achievement
          </H1>
          <p>
            You can add webfonts, meta tags, or analytics to this file. The
            build step will place the bundled scripts into the tag.
          </p>
        </Left>
        <RightHold>
          <Right>
            <Holder>
              <Cont>
                <Num>40+</Num>
                <p>Happy Clients</p>
              </Cont>
              <Cont>
                <Num>300</Num>
                <p>elements</p>
              </Cont>
            </Holder>
          </Right>
          <Right>
            <Holder>
              <Cont>
                <Num>540+</Num>
                <p>Projects Complited</p>
              </Cont>
              <Cont>
                <Num>25+</Num>
                <p>Awards Won</p>
              </Cont>
            </Holder>
          </Right>
        </RightHold>
      </Wrapper>
    </Container>
  );
};

export default Achievement;

const H1 = styled.div`
  font-size: 20px;
  font-weight: 600;
  span {
    color: orange;
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Left = styled.div`
  flex: 0.5;
  margin-right: 20px;

  p {
    font-size: 11;
    color: #ccc;
  }
  @media (max-width: 768px) {
    p {
      font-size: 11;
      color: #ccc;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`;
const Num = styled.div`
  font-weight: 600;
`;
const Cont = styled.div`
  border-left: 2px solid orange;
  margin: 30px;
  // height: 40px;
  padding: 7px;
  p {
    font-size: 11;
    color: #ccc;
    margin: 0;
  }
`;
const Holder = styled.div``;
const RightHold = styled.div`
  display: flex;
  flex: 0.5;
`;
const Right = styled.div`
  flex: 0.7;
`;
const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  /* padding: 30px; */
  height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  margin-top: 40px;
  background-color: var(--bColor);
`;

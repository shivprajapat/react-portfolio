import styled from "styled-components";
import { flexCenter, flexSpace } from "../../variable";

const Wrapper = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  ${flexSpace};
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  ${flexSpace};
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    ${flexCenter};
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  ${flexCenter};
  justify-content: flex-start;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
export {
  Wrapper,
  Container,
  Left,
  Title,
  WhatWeDo,
  Line,
  Subtitle,
  Desc,
  Button,
  Right,
  Img,
};

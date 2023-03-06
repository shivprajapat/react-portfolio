import React, { Fragment } from 'react'
import styled from "styled-components";
import GlobalStyle from './GlobalStyle';
import { Contact, Hero, Who, Works } from './screens';

function App() {
  const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Hero />
        <Who />
        <Works />
        <Contact />
      </Container>
    </Fragment>
  )
}

export default App

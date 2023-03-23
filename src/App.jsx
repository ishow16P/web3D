import React from "react";
import { Hero } from "./components/Hero";
import { Who } from "./components/Who";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import styled from "styled-components";
import { Test } from "./components/Test";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const App = () => {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Test/>
    </Container>
  );
};

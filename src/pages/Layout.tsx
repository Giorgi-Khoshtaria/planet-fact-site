import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
const Container = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

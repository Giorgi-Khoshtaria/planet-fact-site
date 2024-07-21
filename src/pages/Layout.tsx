import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import styled from "styled-components";

const navigationLinks: string[] = [
  "/Mercury",
  "/Venus",
  "/Earth",
  "/Mars",
  "/Jupiter",
  "/Saturn",
  "/Uranus",
  "/Neptune",
];

function Layout() {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname, "wwwwwwww");
  const navigate = useNavigate();
  useEffect(() => {
    if (navigationLinks.includes(pathname)) {
      navigate(pathname);
    } else {
      navigate("/Earth");
    }
    console.log("mounted");
  }, []);
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

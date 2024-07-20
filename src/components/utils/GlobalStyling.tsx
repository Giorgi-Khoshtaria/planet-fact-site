import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaulTheme";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&family=League+Spartan:wght@100..900&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${defaultTheme.colors.black};
    // font-family: ${defaultTheme.fonts.spartan};
    display: flex;
    /* align-items: center; */
    justify-content: center;
    height: 100vh;
    width: 100%;

}


`;
export default GlobalStyles;

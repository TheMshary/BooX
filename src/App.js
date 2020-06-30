import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// Styles
import {
  GlobalStyle,
  Title,
  Description,
  BooXImage,
  ThemeButton,
} from "./styles";

// Components
import BookList from "./components/BookList";

const lightTheme = {
  mainColor: "black",
  backgroundColor: "white",
  crimson: "#DC143C",
};

const darkTheme = {
  mainColor: "white",
  backgroundColor: "black",
  crimson: "#DC143C",
};

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <Title>BooX</Title>
      <BooXImage
        src="https://pbs.twimg.com/profile_images/1090824731752771584/yuJ1_jwV_400x400.jpg"
        alt="BooX Logo"
      />
      <Description>Where Books Are X'ed!</Description>
      <BookList />
    </ThemeProvider>
  );
}

export default App;

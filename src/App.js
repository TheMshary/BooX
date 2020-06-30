import React from "react";
import { ThemeProvider } from "styled-components";

// Styles
import {
  GlobalStyle,
  Title,
  Description,
  BooXImage,
  BookListWrapper,
} from "./styles";

// Components
import BookList from "./components/BookList";

const theme = {
  mainColor: "black",
  backgroundColor: "white",
  crimson: "#DC143C",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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

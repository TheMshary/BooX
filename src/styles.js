import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.h2`
  text-align: center;
`;

const BooXImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

const BookListWrapper = styled.div`
  text-align: center;
`;

const BookWrapper = styled.div`
  img {
    display: block;
    margin-right: auto;
    width: 20%;
  }

  p {
    text-align: left;

    &.book-price {
      color: green;
    }
  }
`;

export {
  GlobalStyle,
  Title,
  Description,
  BooXImage,
  BookListWrapper,
  BookWrapper,
};

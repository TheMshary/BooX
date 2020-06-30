import React from "react";

// Data
import books from "../books";

// Styles
import { BookListWrapper } from "../styles";

// Components
import BookItem from "./BookItem";

const BookList = () => {
  const bookList = books.map((book) => <BookItem book={book} />);
  return <BookListWrapper>{bookList}</BookListWrapper>;
};

export default BookList;

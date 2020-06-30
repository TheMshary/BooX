import React from "react";

// Styles
import { BookWrapper } from "../styles";

const BookItem = (props) => {
  return (
    <BookWrapper>
      <hr />
      <h2>{props.book.name}</h2>
      <img src={props.book.image} alt={props.book.name} />
      <p>{props.book.author}</p>
      <p className="book-price">${props.book.price}</p>
    </BookWrapper>
  );
};

export default BookItem;

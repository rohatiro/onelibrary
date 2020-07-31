import React, { useState, useEffect } from "react";

function BookDetails(props) {
  const bookid = props.match.params.bookid;
  const [book, bookState] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:3001/books/${bookid}`);
      const book = await result.json();

      bookState(book);
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid mt-3">
      <div className="d-flex flex-wrap bg-light">
        <div className="col-12 col-lg-3 py-3 bg-dark">
          <img
            src={book.thumbnail}
            alt={book.title}
            className="book__cover img-fluid"
          />
        </div>
        <div className="col-12 col-lg-9">
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;

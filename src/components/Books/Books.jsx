import React, { Suspense } from "react";
import Book from "../../pages/Book/Book";

const Books = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Books</h1>

      <Suspense fallback={<span>loading....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-4">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;

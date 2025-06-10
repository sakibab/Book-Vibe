import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({ singleBook }) => {
  const { bookName, author, image, review, category, rating, pages } =
    singleBook;
  console.log(singleBook);
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="bg-base-200 m-3">
        <img src={image} alt="Book's image" className="w-46 py-5" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{bookName}</h1>
        <h2>By {author}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
        </div>
      </div>
    </div>
  );
};

export default Book;

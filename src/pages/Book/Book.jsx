import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, author, image, category, rating, totalPages, bookId } =
    singleBook;

  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-lg h-[500px]">
        <figure className="bg-base-200 m-3">
          <img src={image} alt="Book's image" className="w-46 h-72 py-5" />
        </figure>
        <div className="card-body">
          <div className="flex gap-12">
            <h1 className="card-title">{bookName}</h1>
            <div className="badge badge-secondary">Pages: {totalPages}</div>
          </div>
          <h2>By {author}</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

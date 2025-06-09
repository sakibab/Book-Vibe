import React from "react";
import bookimage from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 my-7 rounded-xl px-10 py-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookimage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold w-[70%] mb-10">Books to freshen up your bookshelf!</h1>
          <button className="btn btn-primary bg-green-600 border-none text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

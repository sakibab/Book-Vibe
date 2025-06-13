import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Bookdetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id);
    const singleBook = data.find(book => book.bookId === bookId);

    const {
        bookName,
        image,
        category,
        author,
        publisher,
        totalPages,
        yearOfPublishing,
        review,
        rating
    } = singleBook;

    return (
        <div className="flex gap-10 p-6 rounded-lg my-10">
            {/* Book Image */}
            <div className="w-1/3 ">
                <img src={image} alt={bookName} className="w-full h-auto rounded-md shadow bg-gray-50 p-10" />
            </div>

            {/* Book Details */}
            <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">{bookName}</h1>
                <p className="text-sm text-gray-600">by {author}</p>

                <div className="border-t border-b py-2 text-sm text-gray-500">
                    Category: {category}
                </div>

                <div>
                    <span className="font-semibold text-gray-700">Review: </span>
                    <p className="text-gray-600">{review}</p>
                </div>

                <p className="text-sm text-gray-700">📄 Number of Pages: <span className="font-medium">{totalPages}</span></p>
                <p className="text-sm text-gray-700">🏢 Publisher: <span className="font-medium">{publisher}</span></p>
                <p className="text-sm text-gray-700">📅 Year of Publishing: <span className="font-medium">{yearOfPublishing}</span></p>
                <p className="text-sm text-gray-700">⭐ Rating: <span className="font-medium">{rating}</span></p>

                {/* Buttons */}
                <div className="pt-4 flex gap-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        Read
                    </button>
                    <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bookdetails;

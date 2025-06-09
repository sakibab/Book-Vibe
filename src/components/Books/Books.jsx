import React, { Suspense, useEffect, useState } from 'react';
import Book from '../../pages/Book/Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(()=> {
    //     fetch("booksData.json")
    //     .then(res=> res.json())
    //     .then(data=> {
    //         setAllBooks(data);
    //     })
    // }, [])

    const bookPromise = fetch('./booksData.json').then(res=>res.json());
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-6'>Books</h1>
            <Suspense fallback={<span>loading......</span>}>
                <Book bookPromise={bookPromise}></Book>
            </Suspense>
        </div>
    );
};

export default Books;
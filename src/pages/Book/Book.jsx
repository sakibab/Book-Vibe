import React, { use } from 'react';

const Book = ({bookPromise}) => {

    const data = use(bookPromise)
    console.log(data);
    return (
        <div>
            <h1>single book</h1>
        </div>
    );
};

export default Book;
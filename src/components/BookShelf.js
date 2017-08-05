import React from 'react';
import Book from '../containers/Book';
import PropTypes from 'prop-types';

export default function BookShelf(props) {
  const { books, shelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {shelf}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book =>
            <li key={book.id}>
              <Book book={book} onUpdateBook={props.onUpdateBook} />
            </li>
          )}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

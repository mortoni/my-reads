import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {

  static propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                />
              </li>
            ))}

          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;

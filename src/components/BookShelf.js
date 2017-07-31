import React, { Component } from 'react';
import Book from '../containers/Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {

  static propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    const { books, shelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ shelf }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            {books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  onUpdateBook={this.props.onUpdateBook}
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

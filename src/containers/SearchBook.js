import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../containers/Book'

class SearchBook extends Component {
  state = {
    query: '',
    foundBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() },
      () => {
        if(query.length > 0) {
          this.searchBook()
        } else {
          this.setState({ foundBooks: [] })
        }
      }
    )
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }

  searchBook() {
    BooksAPI.search(this.state.query, 20).then((books) => {
      this.setState(state => ({
        foundBooks: books.filter((book) => book.shelf === 'none')
      }))
    })
  }

  render() {
    const { query, foundBooks } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {foundBooks.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  onUpdateBook={this.updateBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook;

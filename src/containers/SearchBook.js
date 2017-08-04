import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../containers/Book'

class SearchBook extends Component {
  state = {
    query: '',
    foundBooks: []
  }

  setCategory(books) {
    books.map((b) => {
      b.shelf = 'none'
    })

    this.props.books.map((book) => {
      const index = books.findIndex(b => b.id === book.id)
      if(index >= 0) {
        books[index].shelf = book.shelf
      }
    })
    
    return books;
  }

  updateQuery = (query) => {
    this.setState({ query },
      () => {
        if(query.length > 0) {
          this.searchBook()
        }
      }
    )
  }

  searchBook() {
    BooksAPI.search(this.state.query, 20).then((books) => {
      if(Array.isArray(books)) {
        this.setState(state => ({
          foundBooks: this.setCategory(books)
        }))
      } else {
        this.setState({ foundBooks: [] })
      }

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

export default SearchBook;

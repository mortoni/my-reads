import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    const { books } = this.props
    const { query } = this.state

    let showingBooks
    if (query) {
      showingBooks = books.filter((book) => true)
    } else {
      showingBooks = books
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">

              <div className="bookshelf">
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      {showingBooks.map((book) => (
                        <Book />
                      ))}
                    </li>
                  </ol>
                </div>
              </div>


            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchBook;

import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBook extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  getCurrentlyReading() {
    return this.props.books.filter((book) => book.shelf === 'currentlyReading')
  }

  getWantToRead() {
    return this.props.books.filter((book) => book.shelf === 'wantToRead')
  }

  getRead() {
    return this.props.books.filter((book) => book.shelf === 'read')
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelf="Currently Reading" books={this.getCurrentlyReading()}/>
            <BookShelf shelf="Want to Read" books={this.getWantToRead()}/>
            <BookShelf shelf="Read" books={this.getRead()}/>
          </div>
        </div>
        <div className="open-search">
          <Link className='close-create-contact' to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBook

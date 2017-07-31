import React, { Component } from 'react'
import BookShelf from '../components/BookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class ListBook extends Component {
  state = {
    books: []
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState((state) => ({
        books: state.books.map((b) => {
          if(b.id === book.id) {
            b.shelf = shelf
          }
          return b;
        })
      }))
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  getBooks(shelf) {
    return this.state.books.filter((book) => book.shelf === shelf)
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelf="Currently Reading"
              books={this.getBooks('currentlyReading')}
              onUpdateBook={this.updateBook}
            />
            <BookShelf
              shelf="Want to Read"
              books={this.getBooks('wantToRead')}
              onUpdateBook={this.updateBook}
            />
            <BookShelf
              shelf="Read"
              books={this.getBooks('read')}
              onUpdateBook={this.updateBook}
            />
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

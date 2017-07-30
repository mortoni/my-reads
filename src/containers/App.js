import React from 'react'
import * as BooksAPI from '../BooksAPI'
import ListBook from '../components/ListBook'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'
import '../App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf).then((book) => {
      this.setState((state) => ({
        books: state.books.map((b) => {
          if(b.id === book.id) {
            b.shelf = shelf
          }
        })
      }))
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <ListBook
            books={this.state.books}
            onUpdateBook={this.updateBook}
          />
        )}/>

        <Route path='/search' render={() => (
          <SearchBook
            books={this.state.books}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp

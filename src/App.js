import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBook from './components/ListBook'
import SearchBook from './components/SearchBook'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
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
          <ListBook />
        )}/>

        <Route path='/search' render={() => (
          <SearchBook books={this.state.books}/>
        )}/>

      </div>
    )
  }
}

export default BooksApp

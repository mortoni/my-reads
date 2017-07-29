import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBook extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelf="Currently Reading"/>
            <BookShelf shelf="Want to Read"/>
            <BookShelf shelf="Read"/>
          </div>
        </div>
        <div className="open-search">
          <Link className='close-create-contact' to='/search'>dd a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBook

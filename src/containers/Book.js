import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {
  state = {
    value: this.props.book.shelf
  }

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  update = (shelf) => {
    this.setState({ value: shelf },
      () => {
        this.props.onUpdateBook(this.props.book, shelf)
      })
  }

  render() {
    const { book } = this.props

    return (
      <div className="book">
        <div className="book-top">
          {book.imageLinks && (
            <div
              className="book-cover"
              style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
            </div>
          )}
          <div className="book-shelf-changer">
            <select
              value={this.state.value}
              onChange={ (event) => this.update(event.target.value) }>

              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">

          {book.authors && book.authors.map((author) => (
            <div key={ author }>
              <span>{ author }</span>
            </div>
          ))}

        </div>
      </div>
    )
  }
}

export default Book

import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">

          {this.props.book.authors.map((author) => (
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

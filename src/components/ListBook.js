import React from 'react';
import BookShelf from '../components/BookShelf';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const getBooks = (shelf, props) => {
  return props.books.filter((book) => book.shelf === shelf)
}

export default function ListBook(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            shelf="Currently Reading"
            books={getBooks('currentlyReading', props)}
            onUpdateBook={props.onUpdateBook}
          />
          <BookShelf
            shelf="Want to Read"
            books={getBooks('wantToRead', props)}
            onUpdateBook={props.onUpdateBook}
          />
          <BookShelf
            shelf="Read"
            books={getBooks('read', props)}
            onUpdateBook={props.onUpdateBook}
          />
        </div>
      </div>
      <div className="open-search">
        <Link className='close-create-contact' to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

// class ListBook extends Component {
//   static propTypes = {
//     books: PropTypes.array.isRequired,
//     onUpdateBook: PropTypes.func.isRequired
//   }
//
//   getBooks = (shelf) => {
//     return this.props.books.filter((book) => book.shelf === shelf)
//   }
//
//   render() {
//     return (
//       <div className="list-books">
//         <div className="list-books-title">
//           <h1>MyReads</h1>
//         </div>
//         <div className="list-books-content">
//           <div>
//             <BookShelf
//               shelf="Currently Reading"
//               books={this.getBooks('currentlyReading')}
//               onUpdateBook={this.props.onUpdateBook}
//             />
//             <BookShelf
//               shelf="Want to Read"
//               books={this.getBooks('wantToRead')}
//               onUpdateBook={this.props.onUpdateBook}
//             />
//             <BookShelf
//               shelf="Read"
//               books={this.getBooks('read')}
//               onUpdateBook={this.props.onUpdateBook}
//             />
//           </div>
//         </div>
//         <div className="open-search">
//           <Link className='close-create-contact' to='/search'>Add a book</Link>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default ListBook

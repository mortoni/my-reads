import React from 'react'
import ListBook from '../containers/ListBook'
import SearchBook from '../containers/SearchBook'
import { Route } from 'react-router-dom'
import '../App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={ ListBook }/>
        <Route path='/search' component={ SearchBook }/>
      </div>
    )
  }
}

export default BooksApp

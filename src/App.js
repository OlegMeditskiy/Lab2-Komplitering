import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import NewApiKey from './NewApiKey'
import AddBook from './AddBook'
import GetBooks, {getBooks} from './getBooks'
import RemoveBook from './RemoveBook'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewApiKey/>
        <AddBook/>
        <div className="display-books">
          <div className="container">
            <div className="col-12">
              <ul className="list-group">
                <li key="Info" className="list-item list-group-item d-flex align-items-center">
                  <strong className="title">Title</strong>
                  <div className="author"><strong>Author</strong></div>
                  <div className="buttons"><strong>Delete </strong></div>
                </li>
                <GetBooks/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import NewApiKey from './NewApiKey'
import AddBook from './AddBook'
import GetBooks from './getBooks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewApiKey/>
        <AddBook/>
        
                <GetBooks/>
             
      </div>
    )
  }
}

export default App


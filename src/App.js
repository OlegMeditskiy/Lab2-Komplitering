import React, { Component } from 'react'
import Header from './components/ui/Header/Header'
import NewApiKey from './NewApiKey'
import Forms from './Forms'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewApiKey />
        <Forms />
      </div>
    )
  }
}

export default App


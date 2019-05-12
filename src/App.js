import React, { Component } from 'react'
import Header from './components/ui/Header/Header'

class App extends Component {

  constructor() {
    super()
    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.newApiKey = this.newApiKey.bind(this);
    this.request = this.request.bind(this)
    this.getBooks()
    this.state = {
      list: [],
      title: "",
      author: ""
    }
  }

  request(qs, cb, limit = 10) {
    const url = 'https://www.forverkliga.se/JavaScript/api/crud.php?'
    fetch(`${url}${qs}`)
      .then(function (response) {
        return response.json()
      })
      .then(data => {
        if (data.status === 'success') {
          if (cb) {
            cb(data)
          }
          this.getBooks()
        } else if (limit > 0) {
          this.request(qs, cb, limit - 1)
        } 
         else {
          console.log("error")
          console.log(data.message)
        }
      })
  }

  

  newApiKey() {
    this.request('requestKey', function (data) {
      localStorage.setItem('apiKey', data.key)
      document.getElementById("Key").innerHTML = "Current key: " + localStorage.getItem('apiKey')
    })
    
  }

  getBooks() {
    const url = "https://www.forverkliga.se/JavaScript/api/crud.php?"
    const key = localStorage.getItem('apiKey')
    fetch(url + "key=" + key + '&op=select')
      .then(response => response.json())
      .then(result => {
        if (result.status === "success") {
          this.setState({ list: result.data })
        } else if (result.status === "error") {
          this.getBooks()
        }
      })
  }





  addBook(event) {
    const key = localStorage.getItem('apiKey')
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    
    this.request(`key=${key}&op=insert&title=${title}&author=${author}`,  data=> {
     
      console.log("Book was added")
      
    }
    )

  }
  removeBook(event, id) {
    const key = localStorage.getItem('apiKey')
    this.request(`key=${key}&op=delete&id=${id}`,
      data => {
      console.log("Deleted")
     
    })

  }

  addListItem() {
    try {
      return this.state.list.map(book => {
        return (
          <li key={book.id} className="list-item list-group-item d-flex align-items-center">
            <strong className="title">{book.title}</strong>
            <div className="author">{book.author}</div>

            <div className="buttons">
              <button type="submit" className="btn btn-danger" onClick={event => this.removeBook(event, book.id)}>
                Ta bort
        </button>
            </div>
          </li>

        )
      })
    } catch (err) {
      console.log("ERRRRRRRRRRRRRRRRR")
      console.log(err)
    }
  }

  addBookForm() {
    
    return (
      <div className="container">
        <div className="row form-section">
          <div className="book-form col-6">
            <legend>Lägg till dina favoritböcker</legend>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="title"
                aria-describedby="title"
                placeholder="Lägg till titel"
              />
              <input
                type="text"
                className="form-control"
                id="author"
                rows="3"
                data-gramm="true"
                data-txt_gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
                data-gramm_id="63b74fb6-c7e4-7f0e-0c1f-438d47ac87a0"
                data-gramm_editor="true"
                placeholder="Lägg till författare"
              />
            </div>
            <button
              id="btn"
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              onClick={event => this.addBook(event)}
            >
              Skicka
              </button>
          </div>
        </div>
      </div>
    )
  }
  apiKeyForm() {
    return (
      <div>
        <button
          id="btn1"
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          onClick={this.newApiKey}
        >
          NewApiKey
              </button>
        <p id="Key">Current key: {localStorage.getItem('apiKey')}</p>
      </div>
    )
  }


  render() {

    return (
      <div className="App">
        <Header />
        {this.apiKeyForm()}
        {this.addBookForm()}
        <div className="display-books">
          <div className="container">
            <div className="col-12">
              <ul className="list-group">
                <li key="Info" className="list-item list-group-item d-flex align-items-center">
                  <strong className="title">Title</strong>
                  <div className="author"><strong>Author</strong></div>
                  <div className="buttons"><strong>Delete </strong></div>
                </li>
                {this.addListItem()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

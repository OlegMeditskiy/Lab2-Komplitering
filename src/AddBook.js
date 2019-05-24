import request from './request'
import React, { Component } from 'react'
export default class AddBook extends Component {
  add(){
    const key = localStorage.getItem('apiKey')
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    
    request(`key=${key}&op=insert&title=${title}&author=${author}`,  data=> {
      console.log("Book was added")
    }
    )
  }
    
       render(){
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
              onClick={this.add}
            >
              Skicka
              </button>
          </div>
        </div>
      </div>
    )
}
  }
 
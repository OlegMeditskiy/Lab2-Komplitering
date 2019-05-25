import React, { Component } from 'react'
import RemoveBook from './RemoveBook'
import DisplayBooks from './displayBooks'
 export default class GetBooks extends Component{
    constructor(props) {
        super(props);
        this.getBooks()
        this.state = {
          list: []
        }
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
      addListItem() {
        try {
          return this.state.list.map(book => {
            return (
              <li key={book.id} className="list-item list-group-item d-flex align-items-center">
                <strong className="title">{book.title}</strong>
                <div className="author">{book.author}</div>
                <div className="buttons">
                  <button type="submit" className="btn btn-danger" onClick={event => RemoveBook(event, book.id)}>
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
     render(){
         return(
             <div>
                 <DisplayBooks method = {this.addListItem()}/>
             </div>
            
         )
     }
 }
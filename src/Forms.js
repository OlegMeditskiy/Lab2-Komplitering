import React, { Component } from 'react'
import RemoveBook from './RemoveBook'
import DisplayBooks from './displayBooks'
import GetBooks2 from './GetBook'
import AddBook from './AddBook';
 export default class Forms extends Component{
    constructor(props) {
        super(props);
        this.state = {
          list: []
        }
        this.update = this.update.bind(this);
        this.addListItem = this.addListItem.bind(this)
        GetBooks2(this.update)
      }
      update(newList) {
        this.setState({ list: newList},()=>{})
        //,()=>{GetBooks2(this.update)}
    }
    
      addListItem() {
        try {
          return this.state.list.map(book => {
            return (
              <li key={book.id} className="list-item list-group-item d-flex align-items-center">
                <strong className="title">{book.title}</strong>
                <div className="author">{book.author}</div>
                <div className="buttons">
                  <button type="submit" className="btn btn-danger" onClick={event => RemoveBook(event, book.id, this.update)}>
                    Delete
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

      addBookForm(){
        return (
            <div className="container">
              <div className="row form-section">
                <div className="book-form col-6">
                  <legend>Add new book</legend>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      aria-describedby="title"
                      placeholder="Title"
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
                      placeholder="Author"
                    />
                  </div>
                  <button
                    id="btn"
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={event => AddBook(event,this.update)}
                  >
                    Send
                    </button>
                </div>
              </div>
            </div>
          )
      }
     render(){
         return(
             <div>
                 {this.addBookForm()}
                 <DisplayBooks method = {this.addListItem()}/>
             </div>
            
         )
     }
 }
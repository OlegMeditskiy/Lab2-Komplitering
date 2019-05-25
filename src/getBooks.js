import React, { Component } from 'react'
import RemoveBook from './RemoveBook'
import DisplayBooks from './displayBooks'
import GetBooks2 from './getBooks2'
 export default class GetBooks extends Component{
    constructor(props) {
        super(props);
        this.state = {
          list: []
        }
        this.update = this.update.bind(this);
        GetBooks2(this.update)
      }
      update(newList) {
        this.setState({ list: newList });
    }
      getBooks() {
        GetBooks2(this.update)
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
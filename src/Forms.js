import React, {Component} from 'react'
import RemoveBook from './RemoveBook'
import DisplayBooks from './displayBooks'
import AddBookForm from "./AddBookForm";

export default class Forms extends Component{
    constructor(props) {
        super(props);
        this.addListItem = this.addListItem.bind(this)
      }
    
      addListItem() {
        try {
          return this.props.list.map(book => {
            return (
              <li key={book.id} className="list-item list-group-item d-flex align-items-center">
                <strong className="title">{book.title}</strong>
                <div className="author">{book.author}</div>
                <div className="buttons">
                  <button type="submit" className="btn btn-danger" onClick={event => RemoveBook(event, book.id, this.props.update)}>
                    Delete
            </button>
                </div>
              </li>
            )
          })
        } catch (err) {
          console.log("Error")
          console.log(err)
        }
      }

     render(){
         return(
             <div>
                 <AddBookForm update={this.props.update}/>
                 <DisplayBooks method = {this.addListItem()}/>
             </div>
            
         )
     }
 }
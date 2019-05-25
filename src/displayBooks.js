import React, { Component } from 'react'
export default function DisplayBooks(props){
    return(
    <div className="display-books">
            <div className="container">
              <div className="col-12">
                <ul className="list-group">
                  <li key="Info" className="list-item list-group-item d-flex align-items-center">
                    <strong className="title">Title</strong>
                    <div className="author"><strong>Author</strong></div>
                    <div className="buttons"><strong>Delete </strong></div>
                  </li>
            {props.method}
            </ul>
            </div>
          </div>
        </div>)
}
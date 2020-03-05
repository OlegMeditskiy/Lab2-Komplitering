import React from 'react'
import AddBook from "./AddBook";

const AddBookForm=(props)=>{
    return(
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
                        onClick={event => AddBook(event,props.update)}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddBookForm;
import React from 'react'
import NewApiKey from "./NewApiKey";

const ApiKeyButton=(props)=>{
    return(
        <div>
            <button
                id="btn1"
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={event => NewApiKey(event,props.update)}
            >
                NewApiKey
            </button>
            <p id="Key">Current key: {localStorage.getItem('apiKey')}</p>
        </div>
    )
}

export default ApiKeyButton;
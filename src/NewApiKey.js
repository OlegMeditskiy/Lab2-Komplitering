import request from './request'
import React, { Component } from 'react'
export default class NewApiKey extends Component {
  newApi(){
    request('requestKey', function (data) {
      localStorage.setItem('apiKey', data.key)
      document.getElementById("Key").innerHTML = "Current key: " + localStorage.getItem('apiKey')
    })
  }
  render(){
    return (
      <div>
        <button
          id="btn1"
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          onClick={this.newApi}
        >
          NewApiKey
              </button>
        <p id="Key">Current key: {localStorage.getItem('apiKey')}</p>
      </div>
    )
  }
    
  }
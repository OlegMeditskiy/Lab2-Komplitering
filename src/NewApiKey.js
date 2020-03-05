import request from './request'
import React from 'react'
import GetBooks from "./GetBook";

export default function newApi(event,callback){
    request('requestKey', function (data) {
      localStorage.setItem('apiKey', data.key)
      document.getElementById("Key").innerHTML = "Current key: " + localStorage.getItem('apiKey')
      GetBooks(callback)
    })
  }

import request from './request'
import GetBooks from './GetBook'
export default function removeBook(event,id,callback) {
    const key = localStorage.getItem('apiKey')
    request(`key=${key}&op=delete&id=${id}`,
      data => {
      console.log("Deleted")
        GetBooks(callback)
    })
  }
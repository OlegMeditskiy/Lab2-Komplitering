import request from './request'
import GetBooks2 from './GetBook'
export default  function AddBook(event,callback) {
    const key = localStorage.getItem('apiKey')
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    request(`key=${key}&op=insert&title=${title}&author=${author}`,  data=> {
      console.log("Book was added")
      GetBooks2(callback)
    }
    )
  
    
       
  }
 
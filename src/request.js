import GetBooks from './getBooks'
export default function request(qs, cb, limit = 10) {
    const url = 'https://www.forverkliga.se/JavaScript/api/crud.php?'
    fetch(`${url}${qs}`)
      .then(function (response) {
        return response.json()
      })
      .then(data => {
        if (data.status === 'success') {
          if (cb) {
            cb(data)
          }
          
        } else if (limit > 0) {
            request(qs, cb, limit - 1)
        } 
         else {
          console.log("error")
          console.log(data.message)
        }
      })
  }
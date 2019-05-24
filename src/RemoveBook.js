import request from './request'
export default function removeBook(event,id) {
    const key = localStorage.getItem('apiKey')
    request(`key=${key}&op=delete&id=${id}`,
      data => {
      console.log("Deleted")
    })
  }
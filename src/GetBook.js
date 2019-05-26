export default function GetBooks2(callback) {
    const url = "https://www.forverkliga.se/JavaScript/api/crud.php?"
    const key = localStorage.getItem('apiKey')
    fetch(url + "key=" + key + '&op=select')
      .then(response => response.json())
      .then(result => {
        if (result.status === "success") {
            callback(result.data)
          //this.setState({ list: result.data })
        } else if (result.status === "error") {
          GetBooks2(callback)
        }
      })
  }
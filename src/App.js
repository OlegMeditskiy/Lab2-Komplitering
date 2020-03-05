import React, {Component} from 'react'
import Header from './components/ui/Header/Header'
import Forms from './Forms'
import GetBooks2 from "./GetBook";
import ApiKeyButton from "./ApiKeyButton";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.update = this.update.bind(this);
        GetBooks2(this.update)
    }
    update(newList) {
        this.setState({ list: newList},()=>{})
    }
    render() {
    return (
      <div className="App">
        <Header />
          <ApiKeyButton update={this.update}/>
        <Forms list={this.state.list} update={this.update}/>
      </div>
    )
  }
}

export default App


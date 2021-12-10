import { Component } from "react";
import Silence from './Silence/Silence'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <div className="content">
            <Silence />
          </div>
        </header>
      </div>
    )
  }
}

export default App;

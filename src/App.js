import React from 'react';
import { fetchLocation } from './services/fetchLocation';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: []
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    fetchLocation()
      .then(data => {
        let result = data.split("(");
        result = result[1];
        result = result.replace(";"," ");
        result = result.replace(")", " ");

        console.log(result)

      })
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          :D
        </header>
        <main className="app__main">

        </main>
      </div>
    );
  }
}

export default App;

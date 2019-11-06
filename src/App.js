import React from 'react';
import { fetchLocation } from './services/fetchLocation';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    fetchLocation()
      .then(data => {
        console.log(data)

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

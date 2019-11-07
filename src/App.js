import React from 'react';
import { fetchLocation } from './services/fetchLocation';
import MapInfo from './components/MapInfo';
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
        //limpiamos el texto que resulta de la petición
        let result = data.split("(");
        result = result[1];
        result = result.replace(";"," ");
        result = result.replace(")", " ");
        result = JSON.parse(result);
        //nos iteresan ciertos datos que los recogeremos del estado
        this.setState({
          location: result.features
        });

      })
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="header__title">Mapa</h1>
        </header>

        <main className="app__main">
          <MapInfo 
            location={this.state.location}
          />
        </main>

        <footer className="app__footer">
          Cristina González Rubio &copy; 2019
        </footer>
      </div>
    );
  }
}

export default App;

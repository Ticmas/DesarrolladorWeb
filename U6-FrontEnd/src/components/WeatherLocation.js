import React from 'react';
 
class WeatherLocation extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
          ciudad: "Buenos Aires",
          estacion: "Invierno",
         };
      }

      componentDidMount() {
        this.setState({ciudad: "Mendoza"})
      }
      render() {
        return (
          <div>
            <h1>Hola desde {this.state.ciudad}</h1>
            <p>
              Estamos en {this.state.estacion}
            </p>
          </div>
        );
      }
}

export default WeatherLocation;
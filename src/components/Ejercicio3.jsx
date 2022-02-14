import React from 'react';
import { Card } from 'react-bootstrap';

class Ejercicio3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: props.imagen,
      marca: props.marca,
      dimesion: props.dimension,
      sistema: props.sistema,
      almacenamiento: props.almacenamiento,
    };
  }
  componentDidMount() {
    this.setState({
      imagen: localStorage.getItem('imagen'),
      marca: localStorage.getItem('marca'),
      dimension: localStorage.getItem('dimension'),
      sistema: localStorage.getItem('sistema'),
      almacenamiento: localStorage.getItem('almacenamiento'),
    });
  }

  render() {
    return (
      <div id="ej3">
        <h2>Ejercicio 3</h2>
        <ul>
          <li>
            Muestra los nombres de los teléfonos almacenados en la lista de
            favoritos como una unordered list<b> - 0,75 puntos</b>
          </li>
          <li>
            Haz lo mismo que en el apartado anterior, salvo que ahora has de
            rellenar una Card para cada teléfono con los mismos datos que en el
            ejercicio 2,
            <ul>
              <li> {this.state.marca}</li>
              <li>{this.state.dimension}</li>
              <li>{this.state.os}</li>
              <li>{this.state.almacenamiento}</li>
            </ul>
            pero en este caso el botón sirve para eliminar el teléfono de la
            lista de favoritos<b> - 1,25 puntos</b>
          </li>
        </ul>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.state.imagen} />
          <Card.Body>
            <Card.Title>Libro</Card.Title>
            <Card.Text>Marca: {this.state.marca}</Card.Text>
            <Card.Text>Dimension: {this.state.dimension}</Card.Text>
            <Card.Text>sistema: {this.state.sistema}</Card.Text>
            <Card.Text>almacenamiento: {this.state.almacenamiento}</Card.Text>
          </Card.Body>
        </Card>
        );
      </div>
    );
  }
}

export default Ejercicio3;

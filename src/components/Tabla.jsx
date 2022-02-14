import React from 'react';
import {
  Row,
  Container,
  Col,
  Table,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import uuid from 'react-uuid';
class Tabla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      PhoneSpecifications: [],
      selectedItem: '',
      img: '',
    };
  }
  async changeClicked(item) {
    const response = await fetch(
      item.detail
    );
    const responseData = await response.json();
    this.setState({
      PhoneSpecifications: responseData.data,
    });
    this.setState({
      selectedItem: item,
      img: item.image,
    });
  }
  async componentDidMount() {
    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/top-by-fans'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.data.phones,
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <h1>Ligas Profesionales</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Marca</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr key={uuid()} onClick={() => this.changeClicked(item)}>
                        <td>{item.phone_name}</td>
                        <td>{item.detail}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              {/*<FilmCard data = {this.state.selectedItem}>*/}
              {
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    variant="top"
                    src={this.state.img}
                  />
                  <Card.Body>
                    <Card.Title>Movil Elegido</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Marca {this.state.PhoneSpecifications.brand}</ListGroupItem>
                    <ListGroupItem>Modelo </ListGroupItem>
                    <ListGroupItem>Sistema Operativo </ListGroupItem>
                    <ListGroupItem>Dimension </ListGroupItem>
                    <ListGroupItem>Almacenamiento</ListGroupItem>
                  </ListGroup>
                </Card>
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Tabla;
​​



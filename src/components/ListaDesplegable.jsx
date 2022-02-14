import React from 'react';

class ListaDesplegable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tableData : [],
    }
  }
  
  async componentDidMount() {
    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/brands'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.data
    });
  }
  render (){
    return (
      <div>
      <select name="Marcas Telefono">
        {this.state.tableData.map((item) =>{
          return (
      <option value="1">{item.brand_name}</option> 
          );
        })}
    </select>
    <button onClick={() => this.rellenaTabla()}>Añadir</button>
    </div>
    );
  }
}
export default ListaDesplegable;
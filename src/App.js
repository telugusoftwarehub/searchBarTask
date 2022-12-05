import React, { useState } from 'react';
import './App.css';
import InputComponent from './components/common/input/input-component';
import HeaderComponent from './components/common/header/header.component';
import { Table } from 'reactstrap'
 
function App() {
  const [searchValue, setSearchValue] = useState("");

  const users = [
    { name: "Sai", id: '1' },
    { name: "Lisa", id: '2' },
    { name: "Jezz", id: '3' },
    { name: "Mac", id: '4' },
    { name: "Eric", id: '5' },
    { name: "Peter", id: '6' },
    { name: "Pet", id: '6' },
    { name: "Phani", id: '6' }
  ];

  const onSearch = (value) => {
    setSearchValue(value)
  }

  const filterNames = ({ name }) => (name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);

  return (
    <div className="container">
      <HeaderComponent />
      <InputComponent onSearch={onSearch}/>
      <Table className="tableContainer">
        <tr>
          <th> Name </th>
          <th> ID </th>
        </tr>
        {
          users.filter(filterNames).map((item) => {
            return <tr>
              <td> {item.name} </td>
              <td> {item.id} </td>
            </tr>
          })
        }
      </Table>
    </div>
  );
}

export default App;

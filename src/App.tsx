import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerDataTable from './Components/CustomerDataTable';
import getData from './getData';

function App() {
  const data = getData();
  return (
    <CustomerDataTable data={data}/>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './components/NavBar/navBar';
import {ItemListContainer} from './components/Main/ItemListContainer'

const text = {
  greeting: "Bienvenido a la tienda online de SunWater"
}

ReactDOM.render(
  <div>
    <NavBar/>
    <ItemListContainer greeting={text.greeting}/>
  </div>,
  document.getElementById('root')
);



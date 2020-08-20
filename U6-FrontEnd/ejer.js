const PI = 3.14159265359;

let b = 10;

var resultado = PI + b

console.log(resultado)

/***********************************************************************/

//UPDATE NODEJS MYSQL ARMANDO NUESTRA API 
app.update('/alumnos', function (req, res) {
    connection.query('UPDATE `alumnos` SET `nombre`=?,`edad`=? WHERE`id`=?', [req.body.nombre, req.body.edad, req.body.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
     });
 });

//DELETE
app.delete('/alumnos', function (req, res) {
    connection.query('UPDATE `alumnos` SET `nombre`=?,`edad`=? WHERE`id`=?', [req.body.nombre, req.body.edad, req.body.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
     });
 });


 /***********************************************************************/
// REACT 


//app.js

import React, { Component } from 'react';
import Alumnos from './components/Alumnos';

function App() {
  return (
    <div className="App">
    <Alumnos></Alumnos>
  </div>
  );
}

export default App;




//Alumnos.js dentro de la carpeta components
import React  from 'react';
import './App.css';

function Alumnos(props) {
  return <h1> Nombre de alumno, {props.nomre}</h1>;
}

function App() {
  return (
    <div>
      <Alumnos nombre="Adrián" />
      <Alumnos nombre="Benjamín" />
      <Alumnos nombre="Franco" />
    </div>
  );
}
export default App;
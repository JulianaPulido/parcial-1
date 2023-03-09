import { useState } from "react";
import { Form } from "./components/form/Form";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [data, setData] = useState({});
  const [error, setError] = useState(false);

const validacionEspacio = (value) => {
  const regex = /^\s+/; // expresión regular que busca espacios al inicio
  return regex.test(value) ? false : true;
};

const validacionLongitud = (value, longitud) => {
  return value.length < minLength ? false : true;
}

const handlerSubmit = (e, data) => {
  e.preventDefault();
  if (
    validacionEspacio(data.nombre) &&
    validacionLongitud(data.nombre, 3) &&
    validacionLongitud(data.color, 6)
  ) {
    setData(data);
    setError(false);
  } else {
    setError(true);
    setData({});
  }
};


  return (
    <div className="App">
      <h1>Elige un color</h1>
      <Form 
        handlerSubmit= {handlerSubmit} 
        />
        {error && (
        <p>
          Por favor chequea que la información sea correcta
        </p>
      )}
        {data.name && data.color && <Card data={data} />}
    </div>
  );
}

export default App;

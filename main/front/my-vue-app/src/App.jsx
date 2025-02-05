import { useEffect, useRef, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [valor, setValor] = useState(null)


  const activate = () => {
    axios.get('http://127.0.0.1:5000') // Endpoint do backend
      .then(response => {
        console.log("Valor recebido:", response.data.valor); // Log do valor recebido
      })
      .catch(error => {
        console.error("Erro ao buscar dados: ", error);
      });
  };

  return (
    <div className='container'>
      <div className='box'>
        <input type='file' id='upload' hidden onChange={e => setFile(e.target.value)}/>
        <label htmlFor="upload" className='uploadFileContainer'>Choose file</label>
        <button onClick={activate} className='submitButton'>Submit</button>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Estado para armazenar o arquivo selecionado
  const [file, setFile] = useState(null);

  // Função para capturar o arquivo selecionado
  const handleFileChange = (e) => {
    const ready_file = document.querySelector('.uploadFileContainer');
    const selectedFile = e.target.files[0]; // Pega o primeiro arquivo selecionado
    setFile(selectedFile); // Armazena o arquivo no estado
    // console.log('Arquivo selecionado:', selectedFile);
    ready_file.innerHTML = "Ready"
  };

  // Função para enviar o arquivo para o backend
  const activate = () => {
    const answer = document.querySelector('.answer'); 

    if (!file) {
      console.log('Nenhum arquivo selecionado.');
      return;
    }

    // Cria um FormData para enviar o arquivo
    const formData = new FormData();
    formData.append('file', file); // Adiciona o arquivo ao FormData

    // Envia o arquivo para o backend usando axios
    axios
      .post('http://127.0.0.1:5000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo como multipart/form-data
        },
      })
      .then((response) => {
        console.log('Resposta do servidor:', response.data);
        answer.innerHTML = response.data
      })
      .catch((error) => {
        console.error('Erro ao enviar arquivo:', error);
      });
  };

  return (
    <div className='container_father'>
      <div className='title'>
        <h1>ThingRecognition</h1>
      </div>
      <div className='container'>
        <div className='box'>
          {/* Input de arquivo */}
          <input
            type='file'
            id='upload'
            hidden
            onChange={handleFileChange} // Captura o arquivo selecionado
          />
          <label htmlFor='upload' className='uploadFileContainer'>
            Choose file
          </label>

          {/* Botão de envio */}
          <button onClick={activate} className='submitButton'>
            Submit
          </button>
          <h3>Answer: <span className='answer'>----</span></h3>
        </div>
      </div>
    </div>
  );
}

export default App;
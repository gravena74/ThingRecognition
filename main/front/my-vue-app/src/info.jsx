import './App.css';

function App() {
  return (
    <div className='info'>  
        <div className='container_info'>
          <div>
            <p>Este site foi criado como um projeto de estudo e prática em aprendizado de máquina, especificamente para demonstrar o funcionamento de redes neurais convolucionais (CNNs) na classificação de imagens. O conjunto de dados utilizado é o CIFAR-10, que contém 60.000 imagens divididas em 10 categorias: avião, automóvel, pássaro, gato, cervo, cachorro, sapo, cavalo, navio e caminhão. Todas as imagens são em baixa resolução (32x32 pixels), tornando-o um desafio interessante para modelos de visão computacional.</p>
            <p>O sistema funciona de maneira simples: o usuário pode enviar uma imagem que pertença a uma das classes do CIFAR-10, e o site, por meio de uma CNN pré-treinada, tentará classificá-la corretamente. O modelo foi desenvolvido usando TensorFlow/Keras, com uma arquitetura básica de redes convolucionais, incluindo camadas de convolução, pooling e densas para extrair características e realizar a predição. Após o processamento, o resultado é exibido mostrando a classe prevista e a confiança do modelo em sua decisão.</p>
            <p>Este projeto tem fins educacionais, servindo como uma introdução prática ao processamento de imagens com deep learning. Ele não apenas classifica as imagens, mas também ajuda a entender como as CNNs aprendem padrões visuais e como pequenas variações podem influenciar a precisão. Sinta-se à vontade para testar com imagens do CIFAR-10 e observar como o modelo se comporta!</p>
            <p className='italicText'>Observação: Como o modelo foi treinado apenas nas imagens do CIFAR-10, seu desempenho pode ser limitado em fotos fora desse padrão (como imagens maiores ou com fundos complexos). O objetivo principal é demonstrar o funcionamento básico de uma CNN em um problema clássico de classificação de imagens.</p>
          </div>
          <div>
            <img src="cifar10.png" alt="" />
          </div>
        </div>
    </div>
  );
}

export default App;
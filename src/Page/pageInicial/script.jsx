import React from 'react';
import { useCamera } from '../../Script/Câmera/script';

function Home() {
  const { stream, error } = useCamera();

  return (
    <div className="Home">
      <div className="p">
        <p>Inicializando câmera via React</p>
      </div>
      <div className="camera">
        {error ? (
          <div id="caixaErro">
            <p>Erro ao acessar a câmera, ative a sua câmera por favor.</p>
          </div>
        ) : (
          <video id="mostraImagem" autoPlay ref={(video) => video && (video.srcObject = stream)}></video>
        )}
      </div>
    </div>
  );
}

export default Home;

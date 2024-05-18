import './App.css';
import logo from './assets/favicon.png';
import imagem from './assets/img-contrucao.png';

function App() {
  return (
    <>
      <section>
        <h1>Oie! Seja bem-vindo(a) à Angells Vet!</h1>
        <br />
        <h2>Estamos em construção, novidades em breve!</h2>

        <div>
          <img src={logo} alt="logo" />
          <img src={imagem} alt="imagem" />
        </div>
      </section>
    </>
  );
}

export default App;
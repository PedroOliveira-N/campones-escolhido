import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function HomePage () {

  const navigate = useNavigate();

  function irParaMenu() {
    navigate("/topicos/");
  }


    return(
        <div className='HomePage'>
            <header>
                <h1>👨‍🌾 O Camponês Escolhido 👨‍🌾</h1>
            </header>
            <div className='corpo'>
                <p>
                    Olá, este é um site baseado em um projeto pessoal de Pedro Oliveira. 
                    Este projeto é uma história denominada "<strong>O Camponês Escolhido</strong>". 
                    Nele é contada a história de <strong>Jin Lionel</strong>, um jovem que despertaria um imenso poder!
                </p>
                <br/>
                <p>
                    Este projeto consta com páginas com tabelas mostrando as <strong>classes e atributos</strong>, as <strong>raças e suas informações</strong> e um pouco mais sobre o projeto em si.
                </p>

                <br/>
                <br/>

                <p>
                    Clique no botão abaixo para entrar na página de menu e explorar os tópicos ativos!
                </p>

                <button className='page-btn-1' onClick={irParaMenu}>Ir Para o Menu</button>
            </div>
        </div>
    )
}
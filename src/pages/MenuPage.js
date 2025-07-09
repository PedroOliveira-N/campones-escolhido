import { useNavigate } from "react-router-dom";
import '../App.css';

export default function MenuPage () {

  const navigate = useNavigate();

  function irParaClasses () {
    navigate("/topicos/classes-e-atributos/");
  }

  function irParaRacas () {
    navigate("/topicos/racas");
  }

  function VoltarParaHome () {
    navigate("/")
  }

    return (
        <div>
            <header>
                <h1>👉 Selecione Um Dos Tópicos Abaixo 👈</h1>
            </header>

            <div className='corpo'>
                <button className='page-btn-2' onClick={irParaClasses}>Ir Para o Tópico de Classes e Atributos</button>
                <div className="corpo-1">
                    <p className="btn-desc-p">└── Página onde estão descritas as classes iniciais e atributos básicos.</p>
                </div>

                <button className='page-btn-2' onClick={irParaRacas}>Ir Para o Tópico de Raças</button>
                <div className="corpo-1">
                    <p className="btn-desc-p">└── Página onde estão descritas as raças, suas afinidades para com os atributos e as habilidades raciais.</p>
                </div>

                <button className='page-btn-3' onClick={VoltarParaHome}>Voltar Para a Página Inicial</button>
            </div>

        </div>
    )
}
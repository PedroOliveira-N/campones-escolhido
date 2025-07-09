import { useNavigate } from "react-router-dom";

export default function AboutPage () {

  const navigate = useNavigate();

  function VoltarParaMenu() {
    navigate("/topicos/");
  }

    return(
        <div className="AboutPage">
            <header>
                <h1>🤔 Sobre o Projeto 😌</h1>
            </header>

            <section>
                <h2>Sobre o Site:</h2>
                <p>Este site é uma <strong>wiki</strong> com as informações básicas das <strong>raças</strong>, <strong>atributos</strong> e <strong>classes</strong> da história "<strong>O Camponês Escolhido</strong>".</p>
                <p>Ele foi criado com o objetivo de <strong>praticar</strong> a <strong>escrita de código</strong> em <strong>react</strong></p>
            </section>

            <section>
                <h2>Sobre a História</h2>
                <p>A história "<strong>O Camponês escolhido</strong>" se passa em um mundo medieval e é uma narrativa em que a história de <strong>Jin Lionell</strong> é contada.</p>
                <p><strong>Jin Lionell</strong> é um jovem que despertaria uma grande quantidade de <strong>mana oblíqua</strong>, um tipo de mana que envolve a vida de seus usuários de maneira desconhecida de forma a ser capaz de influenciar tanto o equilíbrio das forças naturais quanto o poder dos seres vivos.</p>
                <p>Por conta de seu despertar ele chegou a ser convocado por <strong>grandes entidades</strong> como o <strong>Rei</strong> e <strong>Lideres Religiosos</strong>, além de se tornar alvo para muitas dessas entidades.</p>
            </section>

            <button className='page-btn-4' onClick={VoltarParaMenu}>Voltar Para o Menu</button>
            </div>
    )
}
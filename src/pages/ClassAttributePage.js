import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function ClassAttribut5e () {

  const navigate = useNavigate();

  function VoltarParaMenu() {
    navigate("/topicos/");
  }

  const classes = [
  { nome: 'Guerreiro', emoji: '⚔', tipo: 'Físico', descricao: 'Extremamente forte.' },
  { nome: 'Mago', emoji: '🔮', tipo: 'Mágico', descricao: 'Domina a magia.' },
  { nome: 'Ladino', emoji: '🗡', tipo: 'Físico', descricao: 'É ágil, furtivo e poderoso.' },
  { nome: 'Arqueiro', emoji: '🏹', tipo: 'Físico', descricao: 'Ataca rapidamente de longe.' },
  { nome: 'Comerciante', emoji: '💵', tipo: 'Social', descricao: 'Vende e negocia.' },
  { nome: 'Ferreiro', emoji: '🔨', tipo: 'Criador', descricao: 'Cria armas e armadura resistentes.' },
  { nome: 'Alquimista', emoji: '🧪', tipo: 'Criador', descricao: 'Cria remédios e pergaminhos poderosos.' },
  { nome: 'Domador', emoji: '🐾', tipo: 'Mágico', descricao: 'Domina monstros fortes.' },
  { nome: 'Clérigo', emoji: '🩹', tipo: 'Mágico', descricao: 'Cura e buffa os aliados.' }
];

const atributos = [
  { nome: 'Força', emoji: '💪', tipo: 'Físico', descricao: 'Dano físico e força.' },
  { nome: 'Inteligência', emoji: '🧠', tipo: 'Mágico', descricao: 'Poder mágico e sabedoria.' },
  { nome: 'Destreza', emoji: '🥏', tipo: 'Físico', descricao: 'Velocidade e velocidade de ataque.' },
  { nome: 'Constituição', emoji: '🧬', tipo: 'Físico', descricao: 'Pontos de Vida e resistência.' },
  { nome: 'Controle de Mana', emoji: '🌌', tipo: 'Mágico', descricao: 'Controle e velocidade de recuperação de mana.' },
  { nome: 'Estamina', emoji: '🔋', tipo: 'Físico', descricao: 'Estamina e velocidade de recuperação de estamina.' },
];

    return(
        <div>
        <header>
            <h1>👤 Classes e Atributos 🖐</h1>
        </header>
        <div className='corpo-2'>
            <div className='atributos'>
                <h2>Atributos</h2>
            </div>

            <div className='classes'>
                <h2>Classes</h2>
            </div>

            <div className='atributos'>
                <table border="1" cellPadding="4" style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                    <tr>
                        <th>Emoji:</th>
                        <th>Nome:</th>
                        <th>Tipo:</th>
                        <th>Descrição:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {atributos.map((a, i) => (
                        <tr key={i}>
                        <td>{a.emoji}</td>
                        <td>{a.nome}</td>
                        <td>{a.tipo}</td>
                        <td>{a.descricao}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className='classes'>
                <table border="1" cellPadding="4" style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                    <tr>
                        <th>Emoji:</th>
                        <th>Nome:</th>
                        <th>Tipo:</th>
                        <th>Descrição:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {classes.map((c, i) => (
                        <tr key={i}>
                        <td>{c.emoji}</td>
                        <td>{c.nome}</td>
                        <td>{c.tipo}</td>
                        <td>{c.descricao}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

            <button className='page-btn-3' onClick={VoltarParaMenu}>Voltar Para a Página Inicial</button>
        </div>
    )
}
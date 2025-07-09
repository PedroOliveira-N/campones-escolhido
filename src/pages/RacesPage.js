import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function RacesPage () {

  const racas = [
  {
    nome: "Humana",
    emoji: "🙍‍♂️",
    afinidades: ["💪", "🧠", "🥏", "🧬", "🌌", "🔋", "🔋"],
    habilidades: [
      "Adaptabilidade: Todos os atributos aumentam em +10% quando em adversidades.",
      "Melhor Criação: +20% de chance de êxito em criar coisas.",
      "Versatilidade Tática: Pode trocar temporariamente um atributo com outro durante combate."
    ]
  },
  {
    nome: "Élfica",
    emoji: "🧝‍♂️",
    afinidades: ["💪", "🧠", "🧠", "🧠", "🥏", "🌌", "🌌", "🌌", "🔋", "🔋"],
    habilidades: [
      "Afinidade Natural: Atributos aumentam de +5% a +20% dependendo da proximidade com a natureza.",
      "Afinidade à Árvore do Mundo: Pode se conectar à Árvore do Mundo e acessar conhecimento da verdade."
    ]
  },
  {
    nome: "Celestial",
    emoji: "👼",
    afinidades: ["💪", "🧠", "🧠", "🧠", "🥏", "🥏", "🧬", "🧬", "🌌", "🌌", "🌌", "🔋", "🔋", "🔋"],
    habilidades: [
      "Afinidade Benigna: Natureza pura.",
      "Aura Purificadora: Resistência a magia negra e maldições. Aumenta força mágica e física de aliados próximos em 10%. Ganha +5% de força para cada aliado beneficiado."
    ]
  },
  {
    nome: "Fadas",
    emoji: "🧚‍♀️",
    afinidades: ["🧠", "🧠", "🧠", "🌌", "🌌", "🌌", "🌌", "🔋", "🔋", "🔋"],
    habilidades: [
      "Aura Purificadora: Resistência a magia negra e maldições.",
      "Afinidade Natural: Atributos aumentam de +5% a +20% conforme o ambiente natural.",
      "Corpo Mágico: Podem tornar-se intangíveis no plano mágico.",
      "Benção Espiritual: 15% de chance de sobreviver com 1 de vida e +30% de defesa por 1 turno após golpe fatal."
    ]
  },
  {
    nome: "Vampírica",
    emoji: "🧛‍♂️",
    afinidades: ["💪", "🧠", "🧠", "🥏", "🥏", "🌌", "🔋", "🔋", "🔋"],
    habilidades: [
      "Regeneração Rápida: Vida se regenera 2x mais rápido fora de combate.",
      "Desenvolvimento Sanguinário: +10% em força física, mágica e velocidade ao sugar sangue.",
      "Instinto Caçador: Bônus de dano e crítico contra inimigos com medo, paralisia ou enfraquecidos."
    ]
  },
  {
    nome: "Sereias e Tritãos",
    emoji: "🐬",
    afinidades: ["💪", "🧠", "🥏", "🥏", "🧬", "🔋", "🔋"],
    habilidades: [
      "Afinidade Aquática: Respiração aquática e +10% de dano em ataques de água.",
      "Natação Rápida: +15% de velocidade na água.",
      "Canto Hipnótico: Vozes têm 10% de chance de desorientar inimigos."
    ]
  },
  {
    nome: "Mortos Vivos",
    emoji: "🧟‍♂️",
    afinidades: ["💪", "🧠", "🥏", "🧬", "🌌", "🔋", "🔋"],
    habilidades: [
      "Resistência à Dor: +15% de resistência à dor.",
      "Aura de Terror: +5% de chance de falha em ataques inimigos por medo.",
      "Núcleo de Vida: Só morrem ao destruir o núcleo ou o líder.",
      "Cura Inversa: Cura positiva causa dano."
    ]
  },
  {
    nome: "Oblíquidos",
    emoji: "👁",
    afinidades: [
      "💪", "💪", "💪",
      "🧠", "🧠", "🧠",
      "🧬", "🧬", "🧬",
      "🥏", "🥏", "🥏",
      "🌌", "🌌", "🌌",
      "🔋", "🔋", "🔋", "🔋"
    ],
    habilidades: [
      "Raça Secundária: Nascem com uma segunda raça, herdando habilidades e aparência.",
      "OBS: Autômatas não podem ser escolhidos como Raça Secundária.",
      "Afinidade à Mana: Possuem grande quantidade de mana oblíqua e comum."
    ]
  },
  {
    nome: "Demoníaca",
    emoji: "👿",
    afinidades: ["💪", "🧠", "🧠", "🧠", "🥏", "🥏", "🧬", "🧬", "🌌", "🌌", "🌌", "🔋", "🔋", "🔋"],
    habilidades: [
      "Afinidade Maligna: Natureza sombria.",
      "Aura Intimidadora: Reduz em 15% a força inimiga e ganha +5% para cada afetado.",
      "Instinto Caçador: Bônus contra inimigos enfraquecidos, com medo ou paralisados.",
      "Aura de Terror: +5% de chance de falha nos ataques inimigos."
    ]
  },
  {
    nome: "Dracônica",
    emoji: "🐲",
    afinidades: ["💪", "💪", "🧠", "🧠", "🌌", "🌌", "🔋", "🔋", "🔋"],
    habilidades: [
      "Escamas Resilientes: +20% de resistência física e mágica.",
      "Instinto Caçador: Bônus contra inimigos enfraquecidos, com medo ou paralisados."
    ]
  },
  {
    nome: "Autômata",
    emoji: "⚙",
    afinidades: ["💪", "💪", "🧬", "🧬", "🥏", "🔋", "🔋", "🔋"],
    habilidades: [
      "Corpo Metálico: Imunes a veneno e doenças. +15% de resistência física.",
      "Protocolo Emergencial: 25% de chance de ignorar metade do dano crítico recebido."
    ]
  },
  {
    nome: "Elementais",
    emoji: "⛄",
    afinidades: ["🧠", "🧠", "🧠", "🌌", "🌌", "🌌", "🔋", "🔋", "🔋"],
    habilidades: [
      "Afinidade Elemental: +20% de dano com ataques do próprio elemento. +5% de chance em efeitos secundários.",
      "Afinidade Natural: Atributos aumentam de +5% a +20% dependendo da natureza do ambiente."
    ]
  },
  {
    nome: "Anões",
    emoji: "👨",
    afinidades: ["💪", "💪", "🧬", "🧬", "🧬", "🔋", "🔋", "🔋"],
    habilidades: [
      "Vigor Robusto: +20% de resistência física.",
      "Melhor Criação: +20% de chance de êxito ao criar coisas.",
      "Foco de Forja: -15% de custo e +10% de qualidade em armas.",
      "Postura Inquebrável: +15% de defesa ao ficar com menos de 40% de vida."
    ]
  },
  {
    nome: "Homens Fera",
    emoji: "🐾",
    afinidades: ["💪", "💪", "🥏", "🥏", "🧬", "🔋", "🔋"],
    habilidades: [
      "Sentidos Aguçados: +10% em todos os sentidos.",
      "Fúria: +20% em força e velocidade quando o vigor está abaixo de 35%.",
      "Instinto Caçador: Bônus contra inimigos enfraquecidos, com medo ou paralisados."
    ]
  }
];


  const navigate = useNavigate();

  function VoltarParaMenu() {
    navigate("/topicos/");
  }

    return(
    <div>
      <div className='racas'>
        <table border="1" cellPadding="4">
          <thead>
            <tr style={{ backgroundColor: '#eee' }}>
              <th>Raça</th>
              <th>Afinidades</th>
              <th>Habilidades Raciais</th>
            </tr>
          </thead>
          <tbody>
            {racas.map((raca, index) => (
              <tr key={index} style={{ borderStyle: '2px solid #ccc' }}>
                <td>{raca.emoji} {raca.nome}</td>
                <td>{raca.afinidades.join(' ')}</td>
                <td>
                  <ul style={{listStyle: 'none', paddingLeft: '20px' }}>
                    {raca.habilidades.map((hab, i) => (
                      <li key={i}>{hab}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>;
      <button className='page-btn-3' onClick={VoltarParaMenu}>Voltar Para a Página Inicial</button>
    </div>
    )
}
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { MoonLoader } from "react-spinners";
import axios from "axios";
import { capitalizarNome, pegarNomeCasas, casaParaRota } from '../utils/helpers.js';
import PageLayout from "../components/PageLayout";
import enviarEmail from '../components/EnviarEmail';
import Citacao from "../api/CitacoesApi";
import handlebuscarPersonagem from '../api/PersonagemApi';
import snow from "../assets/personagens/snow.jpg";
import tywin from "../assets/personagens/tywin.jpg";
import daenerys from "../assets/personagens/daenerys.jpeg";
import jaime from "../assets/personagens/jaime.jpg";
import arya from "../assets/personagens/arya.jpg";
import robb from "../assets/personagens/rob-stark.jpg";
import robert from "../assets/personagens/robert.jpg";
import theon from "../assets/personagens/theon.jpg";
import tyrion from "../assets/personagens/tyrion.jpg";
import "./Personagens.css";


const personagensFixos = [
  {
    img: snow,
    nome: "Jon Snow",
    frase: "O Norte se lembra.",
    casa: "House Stark",
  },
  {
    img: tywin,
    nome: "Tywin Lannister",
    frase: "Nunca esqueça quem manda.",
    casa: "House Lannister",
  },
  {
    img: arya,
    nome: "Arya Stark",
    frase: "Valar Morghulis.",
    casa: "House Stark",
  },
  {
    img: daenerys,
    nome: "Daenerys Targaryen",
    frase: "Dracarys!",
    casa: "House Targaryen",
  },
  {
    img: jaime,
    nome: "Jaime Lannister",
    frase: "As coisas que faço por amor",
    casa: "House Lannister",
  },
  {
    img: robb,
    nome: "Robb Stark",
    frase: "O Rei no Norte!",
    casa: "House Stark",
  },
  {
    img: robert,
    nome: "Robert Baratheon",
    frase: "Traga-me vinho!",
    casa: "House Baratheon",
  },
  {
    img: theon,
    nome: "Theon Greyjoy",
    frase: "O que está morto não pode morrer.",
    casa: "House Greyjoy",
  },
  {
    img: tyrion,
    nome: "Tyrion Lannister",
    frase: "Eu bebo e sei das coisas.",
    casa: "House Lannister",
  },
];

export default function Personagens() {
  const [nomePersonagem, setNomePersonagem] = useState("");
  const [casas, setCasas] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      enviarEmail("Personagens");
    }, []);

  async function buscarPersonagem(e) {
    e.preventDefault();

    if (!nomePersonagem) {
      alert("Erro, digite um personagem!");
      return;
    }

    const nomeFormatado = capitalizarNome(nomePersonagem);

    try {
      setLoading(true);
      const data = await handlebuscarPersonagem(nomeFormatado);
      if (data.length === 0) {
        alert("Personagem não encontrado.");
        setResultados([]);
        setCasas([]);
        setLoading(false);
        return;
      }
      setResultados(data);

      if (data[0].allegiances.length > 0) {
        const nomesCasas = [];
        for (const url of data[0].allegiances) {
          try {
            const res = await axios.get(url);
            nomesCasas.push(res.data.name);
          } catch {
            nomesCasas.push("Casa não encontrada");
          }
        }
        setCasas(nomesCasas);
      } else {
        setCasas(["Sem casa"]);
      }
    } catch (error) {
      alert("Erro na busca do personagem.",error);
      setResultados([]);
      setCasas([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageLayout>
      <main id="main-container">
        <p id="title-text">
          Uma das principais atrações de <strong>Game of Thrones</strong> são as tramas
          envolventes e complexas que giram em torno dos personagens interessantes e
          multifacetados da série. Cada personagem traz sua própria história,
          ambições, alianças e conflitos, tornando o universo de Westeros rico em
          drama, reviravoltas e emoções intensas. Dos nobres senhores às figuras
          misteriosas, os personagens são o coração da narrativa, responsáveis por
          cativar fãs ao redor do mundo e manter o suspense em cada episódio. Nesta
          pagina,você pode pesquisar informações desses personagens além de explorar
          cards dos 9 principais. As informações incluem nome, data de nascimento,
          apelido e a casa, entre outros dados relevantes.
        </p>

        <h1>Busque por algum personagem!</h1>
        <section id="pesquisa-personagem">
          <form onSubmit={buscarPersonagem} id="form-pesquisa">
            <label htmlFor="">Personagem:</label>
            <input
              type="text"
              value={nomePersonagem}
              onChange={(e) => setNomePersonagem(e.target.value)}
            />
            <button type="submit">Pesquisar</button>
          </form>

          {loading ? (
            <div id="loading-personagem">
              <MoonLoader color="#81d4fa" />
            </div>
          ) : (
            resultados.length > 0 && (
              <div id="show-personagens">
                <p>
                  <span className="info-title">Nome:</span> {resultados[0].name}
                </p>
                <p>
                  <span className="info-title">Nascido:</span> {resultados[0].born ? resultados[0].born : "Sem Registro"}
                </p>
                <p>
                  <span className="info-title">Cultura:</span>{" "}
                  {resultados[0].culture || "Desconhecido"}
                </p>
                <p>
                  <span className="info-title">Título:</span>{" "}
                  {resultados[0].titles[0] || "Não possui"}
                </p>
                <p>
                  <span className="info-title">Apelidos:</span>{" "}
                  {resultados[0].aliases.slice(0, 2).join(", ") || "Sem apelidos"}
                </p>
                <p>
                  <span className="info-title">Casas e Alianças:</span>{" "}
                  {casas.slice(0, 2).map(pegarNomeCasas).join(", ")}
                </p>
              </div>
            )
          )}
        </section>

        <section id="cards">
          {personagensFixos.map((personagem) => (
            <div key={personagem.nome} className="cards-personagens">
              <img src={personagem.img} alt={personagem.nome} />
              <div className="info-cards">
                <strong>
                  <p id="title-card">{personagem.nome}</p>
                </strong>
                <p id="frase-personagem">"{personagem.frase}"</p>
                <Link to={casaParaRota(personagem.casa)} className="link-casas">
                  {personagem.casa}
                </Link>
              </div>
            </div>
          ))}
        </section>

        <Citacao personagem={"tywin"} />
      </main>
    </PageLayout>
  );
}

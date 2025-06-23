import axios from "axios";

export default async function handlebuscarPersonagem(nomePersonagem) {
  try {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/characters",
      {
        params: { name: nomePersonagem },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar personagem:", error);
    throw error; // <<< Importante: para propagar o erro para o catch no componente
  }
}
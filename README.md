# Wiki of Westeros
Breve fonte de informações sobre o universo de Game of Thrones

# Participantes
- Rian Barbosa Rampinelli Delgado(G10)

## Tecnologias utilizadas
- React
- React Router DOM
- Axios
- EmailJS
- react-icons
- react-spinners

## Sobre
> Projeto temático de uma wiki de Game of Thrones,desenvolvido com React e Vite, utilizando dependências como EmailJS para envio de e-mails. A aplicação consome APIs públicas para exibir dados de personagens, casas, livros e citações do universo GOT.


## Apis utilizadas
- [https://anapioficeandfire.com/](https://anapioficeandfire.com/) - Dados sobre livros, personagens e casas de Game of Thrones.
- [https://gameofthronesquotes.xyz/](https://gameofthronesquotes.xyz/) - API para obter citações de personagens da série.

# Como rodar
Para executar o projeto no seu computador, siga os passos abaixo:
1. Crie uma pasta no VSCode (ou no seu diretório de preferência) e abra o terminal.
2. Execute a seguinte ordem de comandos.

```bash
git clone https://gitlab.com/alunos-dfe/rian-projetofinal.git
cd rian-projetofinal
npm install
npm run dev
'''

# Informações dos JSONs

## Saída da API de **Personagens**

```json
{
  "nome": "Jon Snow",
  "nascido": "In 218 AC",
  "cultura": "Northmen",
  "titulo": "Lord Commander of the Night's Watch",
  "apelidos": ["Lord Snow", "Ned Stark's Bastard"],
  "casas": ["House Stark of Winterfell"]
}

## Saída da API de **Casas**

```json
{
  "Nome": "House Lannister of Casterly Rock",
  "Região": "The Westerlands",
  "Fundacao": "Age of Heroes",
  "Fundador": "Lann",
  "Emblema": A gold lion, on a crimson field(Gules, a lion or),
  "membros_e_aliancas": [
    "Tywin Lannister",
    "Alysanne Farman",
    "Jaime Lannister",
    "Cersei Lannister"
  ],
  "Frase" : "Hear Me Roar!"
}


## Saída da API de **Livros**

```json

{
  "titulo": "A Game of Thrones",,
  "lancamento": "1996-08-06",
  "paginas": 694,
}
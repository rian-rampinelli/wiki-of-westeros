import { useEffect, useState } from "react";
import axios from "axios";
import './CitacoesApi.css'

function Citacao({ personagem }) {
    const [citacao, setCitacao] = useState('');
    const [personagemCitacao, setPersonagemCitacao] = useState('');

    useEffect(() => {
        if (personagem) {
            axios.get(`https://api.gameofthronesquotes.xyz/v1/author/${personagem}/1`)
                .then(response => {
                    console.log(response.data);
                    setCitacao(response.data.sentence);
                    setPersonagemCitacao(response.data.character.name);
                })
                .catch(error => {
                    console.error('Erro ao buscar citações:', error);
                });
        }
    }, [personagem]);

    return (
        
            <div id="apicitacoes">
                <p id="citacao">"{citacao}"</p>
                <p id="spancitacao"><strong>{personagemCitacao}</strong></p>
            </div>
       
    );
}

export default Citacao;

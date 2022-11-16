import { useEffect, useState } from 'react';
import './Championships.css'

//const apiKey = 'test_706fb8737ecacbade477c8040c46c3';
const apiKey = 'live_aedc8c48727d14e432fa4984a6db95';

function Championships({setPartidas}) {

    const [campeonato, setCampeonato] = useState({})
    
    useEffect(() => {
        const getChampionship = async () => {
            var api = 'https://api.api-futebol.com.br/v1/campeonatos/10'; 
            const options = {
              method: 'GET',
              headers: {
                cookie: 'PHPSESSID=jdjtchg10d1pv76rv1o5rrhdle',
                Authorization: `Bearer ${apiKey}`
              }
            };
            var data = await fetch(api, options).then(response=>response.json())
            setCampeonato(data);
        }
        getChampionship();
    }, [])

    async function carregarRodada() {
        var api = `https://api.api-futebol.com.br/v1/campeonatos/${campeonato.campeonato_id}/rodadas/${campeonato.rodada_atual.rodada}`;     
        const options = {
          method: 'GET',
          headers: {
            cookie: 'PHPSESSID=jdjtchg10d1pv76rv1o5rrhdle',
            Authorization: `Bearer ${apiKey}`
          }
        };
        var data = await fetch(api, options).then(response=>response.json())
        setPartidas(data.partidas);    
      }
        
    return (     
        <div className="champ card shadow mx-auto mb-5">
            <div className="card-body flex-column text-center =">
                <h6 className="fw-bold mt-2">Brasileirão Série B</h6>                         
                <img className="logo mt-4 mb-2" src={campeonato.logo} alt="" />                                                             
            </div>
            <button className="btn btn-dark mb-3 mx-auto" onClick={carregarRodada}>Carregar partidas</button>
        </div>        
    );
}

export default Championships;
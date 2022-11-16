import './Match.css'

function Match({partidas}) {   
    return (            
      <div className="d-flex flex-wrap mx-auto">
        {partidas.map((partida) => 
          <div key={partida.partida_id} className="pt mx-auto mb-5">          
          <div className="partida card shadow">
            <div className="card-body d-flex flex-column">
                <h6 className="text-center">{partida.hora_realizacao}</h6>
                <h6 className="text-center">{partida.data_realizacao}</h6>
                {console.log(partida.time_mandante.escudo)}
              <div className="text-center d-flex">                
                  <img className="logo-time mx-auto" src={partida.time_mandante.escudo} alt="" />                               
                  <span className="mx-auto my-auto">X</span>                               
                  <img className="logo-time mx-auto" src={partida.time_visitante.escudo} alt="" />                                       
              </div>           
                <h6 className="mt-3 mx-auto text-center">{partida.placar}</h6>                         
            </div>
          </div>
        </div> 
        )} 
      </div> 
    );
}

export default Match;
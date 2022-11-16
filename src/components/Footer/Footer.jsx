import './Footer.module.css'

function Footer() {
    return (
      <footer className="card bg-dark mx-auto mb-5 text-center text-white rounded">                          
        <div className="card-header text-white">
            Projeto Football Matches para disciplina Projeto de Sistemas Web I
        </div>
        <div className="card-body">
            <p className="card-text">Projeto focado em desenvolver uma aplicação React utilizando uma API para buscar partidas de futebol de algum campeonato.</p>
            <h5 className="card-title mb-3">Desenvolvido por:</h5>
            <a href="https://github.com/rafaelcarvalho-git" target="_blank" rel="noreferrer"><h6>Rafael Carvalho</h6></a>
            <a href="https://github.com/TheSamuelVitor" target="_blank" rel="noreferrer"><h6>Samuel Vitor</h6></a>
            <a href="" target="_blank" rel="noreferrer"><h6>Michele Araujo</h6></a>
            <h6 className="mb-3 mt-4">Repositório no Github</h6>
            <a href="https://github.com/rafaelcarvalho-git/footballmatches" target="_blank" rel="noreferrer">github.com/rafaelcarvalho-git/footballmatches</a>                                            
        </div>
        <div className="card-footer text-white">IFCE - Crato</div>             
      </footer>
    )
}

export default Footer
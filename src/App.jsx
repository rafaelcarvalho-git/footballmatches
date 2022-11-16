import Match from "./components/Match/Match"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import React, {useState} from 'react'
import Championships from "./components/Championships/Championships"

function App() {
  const [partidas, setPartidas] = useState([])
  return (
    <div className="App container">
      <Header />
      <main className="container pb-5">
        <Championships setPartidas={setPartidas} />        
        <Match partidas={partidas} />
      </main>    
      <Footer />
    </div>
  );
}

export default App;
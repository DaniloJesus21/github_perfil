import { useState } from "react"

import Usuario from "./components/Usuario"
import Perfil from "./components/Perfil"
import ReposList from "./components/ReposList"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
    <>
      <Usuario nomeUsuario={nomeUsuario} setNomeUsuario={setNomeUsuario}/>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      
    </>
  )
}

export default App

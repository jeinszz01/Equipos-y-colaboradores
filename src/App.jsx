import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Layout from './components/Layout/Layout'
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/Organizacion/MiOrg'
import Equipos from './components/Equipo/Equipos'
import { equipos } from './data/equipos'
import Footer from './components/Footer/Footer'
// import './App.css'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Prata, serif;
    }
`

function App() {

    const [mostrar, setMostrar] = useState(false)
    const [colaboradores, setColaboradores] = useState([])

    useEffect(() => {
        const colaboradoresStorage = JSON.parse(localStorage.getItem('colaboradores'))
        if(colaboradoresStorage) {
            setColaboradores(colaboradoresStorage)
        }
    }, [])
    
    const mostrarForm = () => {
        setMostrar(!mostrar)
    }

    const nuevoColaborador = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
        localStorage.setItem('colaboradores' , JSON.stringify([...colaboradores,colaborador]))
    }

    return (
        <div className="App">
            <GlobalStyle />
            <Layout />
            
            {mostrar ? <Formulario equipos={equipos} nuevoColaborador={nuevoColaborador} /> : ''}
            
            <MiOrg mostrarForm={mostrarForm} />

            {equipos.map(equipo => {
                const filtroColaboradores = colaboradores.filter(colaborad => colaborad.equipoState === equipo.id)
                return <Equipos key={equipo.id} equipo={equipo} colaboradores={filtroColaboradores} />
            })}
            <Footer />
        </div>
    )
}

export default App

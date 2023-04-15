import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Layout from './components/Layout/Layout'
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/Organizacion/MiOrg'
import Equipos from './components/Equipo/Equipos'
import { teams } from './data/teams'
import { collaborators } from './data/collaborators'
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

    const [ mostrar, setMostrar ] = useState(false)
    const [ colaboradores, setColaboradores ] = useState([])
    const [ equipos, setEquipos] = useState([])

    useEffect(() => {
        const obtenerLs = () => {
            const colaboradoresStorage = JSON.parse(localStorage.getItem('colaboradores')) ?? collaborators
            colaboradoresStorage?.length > 0 && setColaboradores(colaboradoresStorage)
            
            const equiposLs = JSON.parse(localStorage.getItem('equipos')) ?? teams
            equiposLs?.length > 0 && setEquipos(equiposLs)
        }
        obtenerLs()
    }, [])

    useEffect(() => {
        localStorage.setItem('colaboradores', JSON.stringify(colaboradores))
    }, [colaboradores])
    
    useEffect(() => {
        localStorage.setItem('equipos', JSON.stringify(equipos))
    }, [equipos])
    
    
    const mostrarForm = () => {
        setMostrar(!mostrar)
    }

    const nuevoColaborador = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }

    const eliminarColaborador = (id) => {
        const colaboradoresActualizados = colaboradores.filter(colaborador => colaborador.id !== id)
        setColaboradores(colaboradoresActualizados)
    }

    const cambiarColor = (color, id) => {
        //equiposActualizados retorna todos los equipos + el seleccionado modificado.
        const equiposActualizados = equipos.map(equipo => {
            if(equipo.id === id) {
                equipo.colorPrimario = color     
            }
            return equipo
        })
        setEquipos(equiposActualizados)
    }

    const nuevoEquipo = (equipo) => {
        console.log(equipo)
        setEquipos([...equipos, equipo])
    }

    const estateFav = (id) => {
        const colabActualizados = colaboradores.map(colaborador => {
            if(colaborador.id === id) {
                colaborador.favorite = !colaborador.favorite
            }
            return colaborador
        })
        setColaboradores(colabActualizados)
    }

    return (
        <div className="App">
            <GlobalStyle />
            <Layout />
            
            {mostrar ? <Formulario equipos={equipos} nuevoColaborador={nuevoColaborador} nuevoEquipo={nuevoEquipo} /> : ''}
            
            <MiOrg mostrarForm={mostrarForm} />

            {equipos.map(equipo => {
                const filtroColaboradores = colaboradores.filter(colaborad => colaborad.equipoState === equipo.id)
                return <Equipos key={equipo.id}
                    equipo={equipo}
                    colaboradores={filtroColaboradores}
                    eliminarColaborador={eliminarColaborador}
                    cambiarColor={cambiarColor}
                    estateFav={estateFav}
                    />
            })}
            <Footer />
        </div>
    )
}

export default App

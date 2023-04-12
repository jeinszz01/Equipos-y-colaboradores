import { Section, Div, H3 } from './styled-component/Equipo-styled-components'
import Colaborador from '../Colaborador/Colaborador'

const Equipos = ({equipo, colaboradores}) => {
    
    const { nombre, colorPrimario, colorSecundario, id } = equipo

    return <>
        { colaboradores.length > 0 && 
            <Section colorSecundario={colorSecundario}>
                <H3 colorPrimario={colorPrimario}>{nombre}</H3>
                <Div>
                    {colaboradores.map((colaborador, index) => {
                        // if(colaborador.equipoState === id) {
                        //     return  }
                            return <Colaborador key={index} colorPrimario={colorPrimario} colaborador={colaborador} />
                        }
                    )}
                </Div>
            </Section>
        }
    </>
}

export default Equipos
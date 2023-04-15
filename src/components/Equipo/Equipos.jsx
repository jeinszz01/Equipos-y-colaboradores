import { Section, Div, H3, InputColor } from './styled-component/Equipo-styled-components'
import Colaborador from '../Colaborador/Colaborador'
import { useEffect } from 'react'

const Equipos = ({equipo, colaboradores, eliminarColaborador, cambiarColor, estateFav}) => {
    
    const { nombre, colorPrimario, id } = equipo

    function hexToRGB(hex, alpha) {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
    
        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }
    
    return <>
        { colaboradores.length > 0 && 
            <Section colorOpacity={hexToRGB(colorPrimario, 0.6)}>
                <H3 colorPrimario={colorPrimario}>{nombre}</H3>
                <Div>
                    {colaboradores.map((colaborador) => {
                            return <Colaborador 
                                key={colaborador.id}
                                colorPrimario={colorPrimario}
                                colaborador={colaborador}
                                eliminarColaborador={eliminarColaborador}
                                estateFav={estateFav}
                                />
                        }
                    )}
                </Div>
                <InputColor type="color" value={colorPrimario} onChange={e => cambiarColor(e.target.value, id)} />
            </Section>
        }
    </>
}

export default Equipos
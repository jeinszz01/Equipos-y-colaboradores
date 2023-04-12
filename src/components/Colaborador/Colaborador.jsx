import { Caja, CajaImg, CajaInfo } from "./styled-component/Colaborador-styled-components"

const Colaborador = ({colorPrimario, colaborador}) => {
    const { nameState, equipoState, fotoState, puestoState} = colaborador
    console.log(colaborador)
    return (
        <Caja>
            <CajaImg colorPrimario={colorPrimario}>
                <img src={fotoState} alt="fotoState" />
            </CajaImg>
            <CajaInfo>
                <h4>{nameState}</h4>
                <h5>{puestoState}</h5>
            </CajaInfo>
        </Caja>
    )
}

export default Colaborador
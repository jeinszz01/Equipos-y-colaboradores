import { Caja, CajaImg, CajaInfo, ImgDeleteSvg, ImgHeartFalseSvg, ImgHeartTrueSvg } from "./styled-component/Colaborador-styled-components"
import deleteSvg from '/icons/delete.svg'
import ImgHeartFalse from '/icons/heart.svg'
import ImgHeartTrue from '/icons/heartRed.svg'

const Colaborador = ({colorPrimario, colaborador, eliminarColaborador, estateFav}) => {
    
    const { nameState, fotoState, puestoState, id, favorite } = colaborador
    

    return (
        <>
            <Caja>
                <CajaImg colorPrimario={colorPrimario}>
                    <img src={fotoState} alt="fotoState" />
                </CajaImg>
                <CajaInfo>
                    <h4>{nameState}</h4>
                    <h5>{puestoState}</h5>
                    
                    <div>
                        {favorite ? <ImgHeartTrueSvg src={ImgHeartTrue} alt="img-heart-true" onClick={() => estateFav(id)} /> : <ImgHeartFalseSvg src={ImgHeartFalse} onClick={() => estateFav(id)} alt="img-heart-false" />}
                    </div>

                </CajaInfo>
                <ImgDeleteSvg src={deleteSvg} onClick={() => eliminarColaborador(id)} alt='delete-svg' />
            </Caja>
        </>
    )
}

export default Colaborador
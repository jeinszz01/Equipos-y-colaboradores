import styled from "styled-components";
import { colors } from "../../../styled-components/theme";


export const Caja = styled.div`
    width: 280px;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const CajaImg = styled.div`
    background-color: ${props => props.colorPrimario};
    height: 80px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 10px 10px 0px 0px;
    img {
        position: relative;
        top: 30px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`
export const CajaInfo = styled.div`
    padding: 80px 0 25px 0;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    background-color: #FFF;
    h4 {
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        color: ${colors.primary};
        margin-bottom: 12px;
    }
    h5 {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        color: #212121;
        padding: 0 26px;
    }
`
export const ImgDeleteSvg = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
`
export const ImgHeartFalseSvg = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`
export const ImgHeartTrueSvg = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`
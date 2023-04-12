import styled from "styled-components";
import { colors } from '../../../styled-components/theme'

export const Section = styled.section`
    display: flex;
    justify-content: center;
    margin: 80px 0;
`

export const Form = styled.form`
    background: #F7F7F7;
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 25%);
    border-radius: 20px;
    padding: 10px 100px;
    width: 100%;
    max-width: 1121px;
    @media (max-width: 620px) {
        margin: 0 10px;
        padding: 10px 15px;
    }
`
export const TituloForm = styled.h2`
    font-family: Prata, sans-serif;
    font-size: 32px;
    font-weight: 400;
    color: #212121;
    margin: 24px 0;
`
export const Label = styled.label`
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 600;
    display: block;
    margin-bottom: 8px;
    text-transform: capitalize;
`
export const Input = styled.input`
    font-family: Montserrat;
    width: 100%;
    padding: 30px 20px;
    border: none;
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    outline-color: ${colors.primary};
    margin-bottom: 24px;
`

export const Select = styled.select`
    font-family: Montserrat;
    width: 100%;
    padding: 30px 20px;
    border: 1px solid white;
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    outline-color: ${colors.primary};
    margin-bottom: 24px;
`

export const Boton = styled.button`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    padding: 24px 32px;
    border: none;
    border-radius: 10px;
    background-color: ${colors.primary};
    margin: 32px 0;
    cursor: pointer;
    &:hover {
        color: #95FFD4;
    }
`
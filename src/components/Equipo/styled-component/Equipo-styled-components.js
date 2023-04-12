import styled from "styled-components";
import { colors, equipoFondoColors } from "../../../styled-components/theme";

export const Section = styled.section`
    width: 100%;
    background-color: ${props => (props.colorSecundario)};
    padding: 34px;
    text-align: center;
`
export const H3 = styled.h3`
    font-size: 32px;
    font-weight: 400;
    line-height: 43px;
    color: ${colors.secondary};
    border-bottom: 2px solid ${props => (props.colorPrimario)};
    display: inline-block;
    padding-bottom: 8px;
`
export const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 3rem 1rem;
    padding: 30px 0;
`

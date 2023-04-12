import styled from "styled-components";
import { colors } from "../../../styled-components/theme";

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px;
    h3 {
        color: ${colors.primary};
        font-size: 40px;
        font-weight: 400px;
        padding-bottom: 24px;
        border-bottom: 4px solid ${colors.primary};
    }
    img {
        cursor: pointer;
    }
    
`
export const Box = styled.div`
    width: 100%;
    max-width: 1121px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 620px) {
        flex-direction: column;
        gap: 1rem 0;
    }
`

export const Div = styled.div`
    position: absolute;
    right: 0;
    @media (max-width: 620px) {
        position: initial;
    }
`
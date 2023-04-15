import styled from "styled-components";

export const FooterSection = styled.footer`
    background-image: url(${props => props.ImgFooter});
    width: 100%;
    //margin-top: 2rem;
`
export const Caja = styled.div`
    width: 100%;
    max-width: 1121px;
    padding: 3rem 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    strong {
        font-family: Montserrat;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
    }
    @media (max-width: 695px) {
        justify-content: space-evenly;
    }
`
export const Caja2 = styled.div`
    display: flex;
    gap: 2.5rem;
    
`

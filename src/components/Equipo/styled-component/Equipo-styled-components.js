import styled from "styled-components";
import { colors, equipoFondoColors } from "../../../styled-components/theme";

export const Section = styled.section.attrs(
    (props) => ({
        style: {
            backgroundColor: props.colorOpacity,
        }
    })
)`
    width: 100%;
    background-color: ${props=> props.colorOpacity};
    padding: 34px;
    text-align: center;
    position: relative;
`
//background-color: ${props => (props.colorSecundario)};
export const H3 = styled.h3.attrs(
    (props) => ({
        style: {
            borderBottomColor: props.colorPrimario,
        },
    })
)`
    border-bottom-width: 2px;
    border-bottom-style: solid;
    font-size: 32px;
    font-weight: 400;
    line-height: 43px;
    color: ${colors.secondary};
    //border-bottom: 2px solid ${props => (props.colorPrimario)};
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
export const InputColor = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 32px;
    height: 35px;
    border: none;
    appearance: none;
    //background-color: #fff;
    position: absolute;
    top: 15px;
    right: 20px;
    overflow: hidden;
    padding: .2rem;
    border-radius: 50%;
    z-index: 0;
    cursor: pointer;
    ::-webkit-color-swatch {
        //background-color: #fff;
        border: none;
        border-radius: 50%;
    }
    ::-moz-color-swatch {
        //background-color: #fff;
        border-radius: 50%;
    }
    ::before {
        content: '';
        position: absolute;
        z-index: -2;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
        background-color: #399953;
        background-repeat: no-repeat;
        background-size: 50% 50%, 50% 50%;
        background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        -webkit-animation: rotate 4s linear infinite;
        animation: rotate 4s linear infinite;
    }
    ::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 6px;
        top: 6px;
        width: calc(100%);
        height: calc(100%);
        background-color: transparent;
        //border-radius: 6px;
    }
    @-webkit-keyframes rotate{
		100%{
            -webkit-transform: rotate(1turn);
            transform: rotate(1turn);
		}
	}
	@keyframes rotate{
		100%{
            -webkit-transform: rotate(1turn);
            transform: rotate(1turn);
		}
	}
`
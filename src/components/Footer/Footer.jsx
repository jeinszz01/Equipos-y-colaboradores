import { FooterSection, Caja, Caja2 } from './styled-components/Footer-styled-components' 
import ImgFooter from '/img/footer.png'
import ImgLogo from '/img/Logo.png'
import ImgFacebook from '/img/facebook.png'
import ImgInstagram from '/img/instagram.png'
import ImgTwitter from '/img/twitter.png'

const Footer = () => {
    return (
        <FooterSection ImgFooter={ImgFooter}>
            <Caja>
                <Caja2>
                    <a href="#">
                        <img src={ImgFacebook} alt="img-facebook" />
                    </a>
                    <a href="#">
                        <img src={ImgInstagram} alt="img-instagram" />
                    </a>
                    <a href="#">
                        <img src={ImgTwitter} alt="img-twitter" />
                    </a>
                </Caja2>
                <img src={ImgLogo} alt="img-logo" />
                <strong>Desarrollado por Alura</strong>
            </Caja>
            
        </FooterSection>
    )
}

export default Footer
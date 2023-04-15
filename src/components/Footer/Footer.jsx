import { FooterSection, Caja, Caja2 } from './styled-components/Footer-styled-components' 
import ImgFooter from '/img/footer.png'
import ImgLogo from '/img/Logo.png'
import ImgFacebook from '/img/facebook.png'
import ImgInstagram from '/img/instagram.png'
import ImgTwitter from '/img/twitter.png'
import ImgGitHub from '/icons/github.svg'

const Footer = () => {
    return (
        <FooterSection ImgFooter={ImgFooter}>
            <Caja>
                <Caja2>
                    <a href="#">
                        <img src={ImgInstagram} alt="img-instagram" />
                    </a>
                    <a href="https://github.com/jeinszz01" target="_blank">
                        <img src={ImgGitHub} alt="img-github" width={'24px'}  />
                    </a>
                    <a href="#">
                        <img src={ImgTwitter} alt="img-twitter" />
                    </a>
                </Caja2>
                <img src={ImgLogo} alt="img-logo" />
                <strong>Desarrollado Jeins J. && Alura</strong>
            </Caja>
            
        </FooterSection>
    )
}

export default Footer
import ImagenHeader from '/img/header.png'
import { Header, ImgHeader } from './styled-component/layout-styled-component'


const Layout = () => {
    
    return (
        <Header>
            <ImgHeader src={ImagenHeader} alt='xdxd' />
        </Header>
    )
}

export default Layout
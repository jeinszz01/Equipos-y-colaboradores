import Add from '/img/add.png'
import { Section, Box, Div } from './styled-component/miOrg-styled-component'

const MiOrg = ({mostrarForm}) => {

    return (
        <Section>
            <Box>
                <h3>Mi organización</h3>
                <Div>
                    <img src={Add} alt="add-img" onClick={mostrarForm} />
                </Div>
            </Box>
        </Section>
    )
}

export default MiOrg
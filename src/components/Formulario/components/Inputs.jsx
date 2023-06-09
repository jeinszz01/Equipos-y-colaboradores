import { Label, Input } from "../styled-component/formulario-styled-components"

const Inputs = (props) => {
    
    const { name, placeHold, required, llenarInputs, valor } = props
    const { type = 'text'} = props

    return (
        <>
            <Label htmlFor={name}>{name}</Label>
            <Input 
                type={type}
                id={name}
                placeholder={placeHold}
                required={required}
                onChange={e => llenarInputs(e.target.value)}
                value={valor}
            />
        </>
    )
}

export default Inputs
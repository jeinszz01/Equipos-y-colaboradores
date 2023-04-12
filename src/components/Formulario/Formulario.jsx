import { useState } from "react"
import { Section, Form, TituloForm, Label, Select, Boton } from "./styled-component/formulario-styled-components"
import Inputs from "./components/Inputs"
import SelectOption from "./components/SelectOption"

const Formulario = ({equipos, nuevoColaborador}) => {

    const [ nameState, setNameState ] = useState('')
    const [ puestoState, setPuestoState ] = useState('')
    const [ fotoState, setFotoState ] = useState('')
    const [ equipoState, setEquipoState ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newColaborador = {
            nameState,
            puestoState,
            fotoState,
            equipoState
        }
        nuevoColaborador(newColaborador)
        setNameState('')
        setPuestoState('')
        setFotoState('')
        setEquipoState('')
    }

    return (
        <Section>
            <Form onSubmit={handleSubmit}>
                <TituloForm>Rellena el formulario para crear el colaborador.</TituloForm>
                
                <Inputs name='nombre' llenarInputs={setNameState} valor={nameState} placeHold='Ingresa nombre' required />
                <Inputs name='puesto' llenarInputs={setPuestoState} valor={puestoState} placeHold='Ingresa puesto' required />
                <Inputs name='foto' llenarInputs={setFotoState} valor={fotoState} placeHold='Ingresa enlace de foto'/>
                
                <Label htmlFor="">Equipos</Label>
                <Select value={equipoState} onChange={e => setEquipoState(e.target.value)}>
                    <option value="" disabled hidden>--Selecciona un equipo--</option>
                    {equipos.map(equipo => {
                        const {id, nombre} = equipo
                        return <SelectOption id={id} equipo={nombre} key={id} />
                    })}
                </Select>
                
                <Boton>Crear</Boton>

            </Form>
        </Section>
    )
}

export default Formulario
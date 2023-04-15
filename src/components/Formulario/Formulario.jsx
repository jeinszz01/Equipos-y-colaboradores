import { useState } from "react"
import { Section, Form, TituloForm, Label, Select, Boton, Input } from "./styled-component/formulario-styled-components"
import Inputs from "./components/Inputs"
import SelectOption from "./components/SelectOption"

const Formulario = ({equipos, nuevoColaborador, nuevoEquipo}) => {

    const [ nameState, setNameState ] = useState('')
    const [ puestoState, setPuestoState ] = useState('')
    const [ fotoState, setFotoState ] = useState('')
    const [ equipoState, setEquipoState ] = useState('')

    const [ tituloEquipo, setTituloEquipo ] = useState('')
    const [ color, setColor ] = useState('#000000') //

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newColaborador = {
            nameState,
            puestoState,
            fotoState,
            equipoState,
            favorite: false
        }

        if(newColaborador.id) {
            console.log('editando...')
        } else {
            newColaborador.id = generarId()
            nuevoColaborador(newColaborador)
        }
        setNameState('')
        setPuestoState('')
        setFotoState('')
        setEquipoState('')
    }

    const handleSubmitEquipo = (e) => {
        e.preventDefault()

        const newEquipo = {
            nombre: tituloEquipo,
            colorPrimario: color
        }
        newEquipo.id = generarId()
        nuevoEquipo(newEquipo)
        setTituloEquipo('')
        setColor('#000000')
    }

    return (
        <Section>
            <Form onSubmit={handleSubmit}>
                <TituloForm>Rellena el formulario para crear el colaborador.</TituloForm>
                
                <Inputs name='nombre' valor={nameState} llenarInputs={setNameState}  placeHold='Ingresa nombre' required />
                <Inputs name='puesto' valor={puestoState} llenarInputs={setPuestoState}  placeHold='Ingresa puesto' required />
                <Inputs name='foto' valor={fotoState} llenarInputs={setFotoState}  placeHold='Ingresa enlace de foto'/>
                
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
            <Form onSubmit={handleSubmitEquipo}>
                <TituloForm>Rellena el formulario para crear el Equipo.</TituloForm>
                
                <Inputs name='titulo' valor={tituloEquipo} llenarInputs={setTituloEquipo} placeHold='Ingresa el título del Equipo' required />
                
                <Inputs type='color' name='color' valor={color} llenarInputs={setColor}/>

                <Input type="text" value={color} onChange={e => setColor(e.target.value)} disabled />
                <Boton>Registrar Equipo</Boton>

            </Form>
        </Section>
    )
}

export default Formulario
import "./Time.css"
import Colaborador from "../Colaborador"

const Time = (props) => {
  const cssFundo = {backgroundColor: props.corSecundaria}
  const cssBorda = {borderColor: props.corPrimaria}

  return(
    <section className="time" style={cssFundo}>
      <h3 style={cssBorda}>{props.nome}</h3>
      {props.colaboradores.map( colaborador => <Colaborador /> )}
      {/* <Colaborador />
      <Colaborador /> */}
    </section>
  )
}

export default Time
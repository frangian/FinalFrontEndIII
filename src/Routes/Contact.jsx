import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Queres saber mas?</h2>
      <p>Envianos tus inquietudes y te contactaremos pronto</p>
      <Form/>
    </div>
  )
}

export default Contact
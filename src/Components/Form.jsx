import React from "react";
import { useState } from "react";

const Form = () => {
  const [nombreCompleto, cambiarNombreCompleto] = useState({campo: '', valido: null});
  const [email, cambiarEmail] = useState({campo: '', valido: null});
  const onChange = (e) =>{
    cambiarNombreCompleto({...nombreCompleto, campo: e.target.value})
  }

  const onChange2 = (e) =>{
    cambiarEmail({...email, campo: e.target.value})
  }

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  const validacion = () =>{
    if(expresiones.nombre.test(nombreCompleto.campo)){
      cambiarNombreCompleto({...nombreCompleto, valido: 'true'})
    } else {
      cambiarNombreCompleto({...nombreCompleto, valido: 'false'})
    }
  }

  const validacion2 = () =>{
    if(expresiones.correo.test(email.campo)){
      cambiarEmail({...email, valido: 'true'})
    } else {
      cambiarEmail({...email, valido: 'false'})
    }
  }
  
  const onSubmit = (e) =>{
    e.preventDefault();
    if(email.valido === 'true' && nombreCompleto.valido === 'true'){
      let validacionTrue = document.getElementById("validacionVerdadera");
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "";
      validacionTrue.innerHTML = "<p>Gracias " + nombreCompleto.campo + ", te contactaremos cuanto antes via email. </p>";
    } else {
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "<p>Algo salió mal, verifique sus datos e ingréselos nuevamente.</p>";
      let validacionTrue = document.getElementById("validacionVerdadera");
      validacionTrue.innerHTML = "";
    }
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
          <label htmlFor="nombreApellido"></label>
          <input 
            type="text" 
            id="nombreApellido" 
            placeholder="Nombre y apellido" 
            value={nombreCompleto.campo} 
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
          />
          <label htmlFor="email"></label>
          <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            value={email.campo} 
            onChange={onChange2}
            onKeyUp={validacion2}
            onBlur={validacion2}
          />
          <button type="submit" >Submit</button>
      </form>
      <div id="validacionFalsa"></div>
      <div id="validacionVerdadera"></div>
    </div>
  );
};

export default Form;
import React,{useState} from 'react'
import validate from './validate.js'

const Form = ({login}) => {
  
  const [inputs, setInputs] = useState({
    email:'',
    password:''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setInputs({...inputs, [event.target.name]:event.target.value})
    setErrors(validate({...inputs,[event.target.name]:event.target.value}),errors)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(inputs);
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <input type="text" onChange={handleChange} name='email' value={inputs.email}/>
        <label>Usuario</label>
        <span>{errors.email}</span>

        <input type="password" onChange={handleChange} name='password' value={inputs.password}/>
        <label>Contraseña</label>
        <span>{errors.password}</span>

        <button>Ingresar</button>


      </form>
    </div>
  )
}

export default Form
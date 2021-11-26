
import React, {useState, useEffect} from 'react';

const initialForm={
    usuario:"",
    contrasenia:"",
    id:null,
};



const CrudForm= ({agregarRegistro, actualizarRegistro, datoEditar, setDatoEditar}) =>{
    const [form,setForm]= useState(initialForm);

useEffect (()=>{
    if(datoEditar){
        setForm(datoEditar);
    }else {
        setForm(initialForm);
    }

}, [datoEditar]);

    const handleChange=(e) =>{
        setForm({...form,[e.target.name]:e.target.value,});
    };

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(!form.usuario || !form.contrasenia){
            alert("Datos incompletos");
            return;
        }

        if(form.id===null){
            agregarRegistro(form);
        }else{
            actualizarRegistro(form);
        }

        handleReset();
    };
    const handleReset=(e) =>{
        setForm(initialForm);
        setDatoEditar(null);
    };

    return(
        <div class="cform">
            <h3>Agregar Usuario</h3>
            <form onSubmit={handleSubmit} class="form" id="form">
                <label for="usuario">usuario<span>*</span></label>
                <input 
                name="usuario"
                required
                type="text"  
                placeholder="usuario"
                onChange={handleChange} 
                value={form.usuario}/>
                <label for="contrasenia">contraseña<span>*</span></label>
                <input  
                name="contrasenia"
                required
                id="password"
                type="password" 
                placeholder="password" 
                onChange={handleChange} 
                value={form.contrasenia}/>
                <button type="submit" class="boton-submit">Enviar</button>
                <input type="reset" value="Limpiar" class="boton-send" onClick={handleReset}/>
            </form>
        </div>
    );
};

export default CrudForm;
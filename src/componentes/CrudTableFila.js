import React from 'react';

const CrudTableFila=({el, setDatoEditar, deleteRegistro})=>{
    let{usuario, contrasenia, id}=el;
    return (
        <tr>
            <td>{usuario}</td>
            <td>{contrasenia}</td>
             <td>
                <button onClick={() => setDatoEditar(el) }>Editar</button>
                <button onClick={() => deleteRegistro(id) }>Eliminar</button>
             </td>
        </tr>
    );
};

export default CrudTableFila;
import React from 'react';

const CrudTableFila=({el, setDatoEditar, deleteRegistro})=>{
    let{usuario, contrasenia, id, product, type}=el;
    return (
        <tr>
            <td>{usuario}</td>
            <td>{contrasenia}</td>
            <td>{id}</td>
            <td>{product}</td>
            <td>{type}</td>

            <td>
                <button onClick={() => setDatoEditar(el) }>Editar</button>
                <button onClick={() => deleteRegistro(id) }>Eliminar</button>
            </td>
        </tr>


        
    );
};

export default CrudTableFila;
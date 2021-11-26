import React, { useState} from 'react';
import CrudForm from './Crudform';
import CrudTable from './CrudTable';

const datos = [
    {id:1, Usuario: "Usuario1",Contrasenia: "Contrasenia1"},
    {id:2, Usuario: "Usuario2",Contrasenia: "Contrasenia2"},
    {id:3, Usuario: "Usuario3",Contrasenia: "Contrasenia3"},
    {id:4, Usuario: "Usuario4",Contrasenia: "Contrasenia4"},
    {id:5, Usuario: "Usuario5",Contrasenia: "Contrasenia5"}
];

const CruddApp=()=>{
    const [db,setDb]=useState(datos);
    const [datoEditar, setDatoEditar]=useState(null);

    const agregarRegistro=(data)=>{
        
        data.id=Date.now();
        //console.log(data);
        setDb([...db,data]);

    };
    const actualizarRegistro=(data)=>{
        let newDato=db.map((el)=>(el.id=== data.id? data : el));
        setDb(newDato);
    };
    const deleteRegistro=(id)=>{
        let borrar=window.confirm(
            `¿estas seguro de eliminar el registro?`
        );

        if(borrar){
            let nuevoDato=db.filter((el)=>el.id !==id);
            setDb(nuevoDato)
        }else{
            return;
        }
    };  

    return(
        <div>
            <CrudForm
                agregarRegistro={agregarRegistro}
                actualizarRegistro={actualizarRegistro}
                datoEditar={datoEditar}
                setDatoEditar={setDatoEditar}
            />
            <CrudTable 
            data={db}
            setDatoEditar={setDatoEditar}
            deleteRegistro={deleteRegistro}
            />

        </div>
    )
}
export default CruddApp;
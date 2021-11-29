import React from "react";
import CrudTableFila from "./CrudTableFila";

const CrudTable = ({ data, setDatoEditar, deleteRegistro }) => {
return (
    <div class="ctabla">
    <table>
        <thread>
        <tr>
            <th>Usuario</th>
            <th></th>
            <th>contraseña</th>
        </tr>
        </thread>
        <tbody>
        {data.length > 0 ? (
            data.map((el) => (
            <CrudTableFila
                key={el.id}
                el={el}
                setDatoEditar={setDatoEditar}
                deleteRegistro={deleteRegistro}
            />
            ))
        ) : (
            <tr>
            <td colSpan="3">Sin datos</td>
            </tr>
        )}
        </tbody>
    </table>
    </div>
);
};

export default CrudTable;

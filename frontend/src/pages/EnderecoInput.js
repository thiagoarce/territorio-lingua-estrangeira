import React from 'react'
import firebase from '../services/firebase'

export const EnderecoInput = ({ endereco }) => {
    const [direccion, setDireccion] = React.useState(endereco.direccion);

    const onUpdate = () => {
        const db = firebase.firestore();
        db.collection("enderecos").doc(endereco.id.toString()).set({...endereco, direccion: direccion});


    }

    const onDelete = () => {
        const db = firebase.firestore();
        db.collection("enderecos").doc(endereco.id.toString()).delete();

    }

    return (
        <>
            <input
                value={direccion}
                onChange={e => {
                    setDireccion(e.target.value);
                }}
            />
            <button onClick={onUpdate}>Editar</button>
            <button onClick={onDelete}>Delete</button>
            
        </>
    )

}

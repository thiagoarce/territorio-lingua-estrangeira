import React, { useEffect, useState } from 'react';
import './global.css';
import firebase from './services/firebase'
import {EnderecoInput} from './pages/EnderecoInput'


function App() {
  const [enderecos, setEnderecos] = useState([])
  const [newEndereco, setNewEndereco] = useState()

  useEffect(() => {

    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("enderecos")
                      .where("congregacao", "==", "Sidrolândia").limit(5).orderBy("nacionalidade").get();
      setEnderecos(data.docs.map(doc => doc.data()))
    }

    fetchData()
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("endereco").doc("Hello").set({name: newEndereco})

  }

  return (
    <>
    <input value={newEndereco} onChange={e => setNewEndereco(e.target.value)}/>
    <button onClick={onCreate}>Criar</button>
      {enderecos.map(endereco => (
        <ul key={endereco.id}>
          <li><EnderecoInput endereco={endereco}/></li>
          <li>{endereco.nome}</li>
          <li>{endereco.nacionalidade}</li>
          <li>{endereco.idioma}</li>
        </ul>
      )
      )}
    </>

  );
}

export default App;

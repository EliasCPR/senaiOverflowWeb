import { useState } from 'react';

function Teste (){

    const[contador, setContador] =  useState(0);
    const [nomes, setNomes] = useState([
        "Elias","Eduardo","Thamires","jean"
    ]);
    const [nome, setNome] = useState("");

    const handleSand = () => {

        setNomes([...nomes,nome]);
        setNome("");
    }
    return(
        <>
        <h1>{contador}</h1>

        <ul>
            {nomes.map(nome => <li>{nome}</li>)}
        </ul>
        <button onClick={() => setContador(contador+1)}>Clique me</button>
        <button onClick={() => setNome("")}>Limpar me</button>
        <input type="text" value={nome} placeholder="digite seu nome" onChange={(e) => setNome(e.target.value)}/>
        <button onClick={handleSand}>Enviar</button>
        <h2>{nome}</h2>

        </>
    );
}

export default Teste;
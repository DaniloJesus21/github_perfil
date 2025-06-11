import { useState } from 'react';

import styles from './Usuario.module.css'

const Usuario = ({ setNomeUsuario }) => {
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        setNomeUsuario(inputValue.trim());
    };

    return (
        <div>
            <b>Digite o nome do usuário: </b>
            <input className={styles.textbox} type="text" onChange={(e) => setInputValue(e.target.value)} />
            <button className={styles.button} onClick={handleClick}>Buscar</button>
        </div>
    )
}

export default Usuario
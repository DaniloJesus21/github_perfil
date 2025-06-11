import { useState, useEffect } from "react"

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuErro, setDeuErro] = useState(false)

    useEffect(() => {
        setEstaCarregando(true)
        setDeuErro(false)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição')
            }
            return response.json()
        })
        .then(responseJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(responseJson)
            }, 3000)
        })
        .catch(e => {
            setEstaCarregando(false)
            setDeuErro(true)
        })
    }, [nomeUsuario])

    if (deuErro) {
        return <div className={styles.textError}><h2>Erro ao encontrar usuário!!!</h2></div>
    }

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome: </b> {name} <br />                            
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b> {language} <br />
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no github</a>                       
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList
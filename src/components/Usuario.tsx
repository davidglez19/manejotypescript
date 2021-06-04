import { useState } from "react"



export const Usuario = () => {
    const [usuario, setUsuario] = useState<Usuarios>();

    const login = () => {
        setUsuario({
            uid: 'abc123',
            name: 'Aline Monsisvais'
        })
    }

    return (
        <div className="mt-3">
            <h3>Manejo de Usurios</h3>
            <button className="btn btn-primary mb-3" onClick= { login }>Login</button>
            {
                (!usuario)
                ? <p>no hay usuario</p>
                :<pre>{ JSON.stringify(usuario) }</pre>
            }
            
        </div>
    )
}

interface Usuarios {
    uid: string,
    name: string
}

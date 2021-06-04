import { useState } from "react"
import { Timer } from "./Timer"


export const TimerPadre = () => {
    
    const [milisegundos, setmilisegundos] = useState(1000)

    return (
        <div>
            <h4>Milisegundo <small>{milisegundos}</small> </h4>
            <button onClick= { ()=> setmilisegundos(1000) } className="btn btn-outline-success m-3">1000</button>
            <button onClick= { ()=> setmilisegundos(2000) } className="btn btn-outline-success">2000</button>
            <Timer milesegundo = { milisegundos} />
        </div>
    )
}

import { useState } from "react"


export const Counter = () => {

    const [counter, setCounter] = useState<number>(0)

    const incrementar = (numero: number = 1) => {
        setCounter( counter + numero );
    }
    const reset = () => {
        setCounter(0);
    }

    return (
        <div className="mt-5">
            <h3>Counter: { counter }</h3>
            <button onClick={ () =>  incrementar() } className="btn btn-outline-primary">+1</button>
            <button onClick={  reset } className="btn btn-outline-danger">Reset</button>
            <button onClick={ () =>  incrementar(2) } className="btn btn-outline-primary">+2</button>
        </div>
    )
}

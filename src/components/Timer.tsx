import { useEffect, useRef, useState } from "react"

type argsTiempo = {
    milesegundo : number
}

export const Timer = ( { milesegundo } : argsTiempo ) => {
    const [tiempo, setTiempo] = useState(0)

    const ref = useRef<NodeJS.Timeout>()

    
    useEffect( () => {
        ref.current && clearInterval(ref.current);
        console.log('useEfect');
       ref.current = setInterval( () => setTiempo( s => s +1), milesegundo)
    }, [milesegundo])

    return (
        <div>
            <p>Timer -- {tiempo}</p>
        </div>
    )
}

import {useState} from "react";

function Saludos() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>
                Hola a todos
            </h1>
            <p>
                Este es un saludo desde el componente saludo.
            </p>
        </>
    )
}

export default Saludos
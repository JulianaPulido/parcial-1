import React, { useState } from "react"

export const Form =(handlerSubmit) => {
    const [nombre, setNombre] = useState ("");
    const [color, setColor] = useState ("");

    return(
        <form onSubmit = {(e) => handlerSubmit(e, { nombre, color})}
        >
            <input
            type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresar Nombre"
            />
            <input
            type="text" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Ingresar Color Favorito"
            />
            <input type="submit" value="Enviar"/>

        </form>

    )
}
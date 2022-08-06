import React from "react"


const Produto = ({nome, propriedades }) => {
    return (
        <div>
            <p>{nome}</p>
                <ul>
                    {propriedades.map((propriedade) => (
                            <><li style={{padding:'2px'}}>{propriedade}</li></>
                    ))}
                </ul>
        </div>
    )
}

export default Produto
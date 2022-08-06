import React from "react"
import Titulo from './Titulo'
import Produto from './Produto'
const Produtos = () => {
    const produtos = [
        {nome:'Notebook', propriedades: ['16Gb RAM', '512GB']},
        {nome:'SmatPhone', propriedades: ['2Gb RAM', '128GB']}
    ]
    return (
        <>
            <Titulo>Produtos</Titulo>
            {produtos.map((produto) => (
                <div id="produtos" style={{border: '1px solid black', marginTop:'10px', padding:'10px', borderRadius:'10px'}}>
                    <Produto produto={produto} {...produto}/>
                </div>
            ))}
        </>
    )
}

export default Produtos
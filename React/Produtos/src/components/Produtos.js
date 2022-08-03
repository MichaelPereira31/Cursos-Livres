import React from "react"

const Produtos = () => {
    const produtos = [
        {nome:'Notebook', propriedades: ['16Gb RAM', '512GB']},
        {nome:'SmatPhone', propriedades: ['2Gb RAM', '128GB']}
    ]
    return (
        <>
            <h1>Produtos</h1>
            {produtos.map((produto) => (
                <div id="produtos" style={{border: '1px solid black', marginTop:'10px', padding:'10px', borderRadius:'10px'}}>
                    <h3>{produto.nome}</h3>
                    <ul>
                    {produto.propriedades.map((propriedade) => (
                            <><li style={{padding:'2px'}}>{propriedade}</li></>
                            ))}
                    </ul>
                </div>
            ))}
        </>
    )
}

export default Produtos
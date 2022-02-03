import "./styles.css"

//UTILIZANDO MAP NO COMPONENT
const CardPessoas2 = (({list}) => {
    return(
    list.map((item) => (   
        <div className="pessoa2">    
            <h1>Dev: {item.name}</h1>
            <h2>Idade: {item.age}</h2>
            <h2>País: {item.country}</h2>
        </div>
        )
    )
    )
    })

export default CardPessoas2
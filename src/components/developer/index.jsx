import "./style.css"

// UTILIZANDO MAP NO APP
function CardPessoas({name, age, country}){
     return(
        <div className="pessoa">    
            <h1>Dev: {name}</h1>
            <h2>Idade: {age}</h2>
            <h2>País: {country}</h2>
        </div>
    )

}


export default CardPessoas
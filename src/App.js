import './App.css';
import CardPessoas from './components/developer' 
import CardPessoas2 from './components/developer2';




function App() {
  const devs = [{name: "Hamart Rony", age:"33", country:"Brazil"}, {name: "Hanna Alves", age:"4", country:"Brazil"}, {name: "Helane Alves", age:"33", country:"Brazil"}]
 
    return (
      <div className="App">
        <header className="App-header">
        
           {devs.map((item) => <div><CardPessoas name={item.name} age={item.age} country={item.country}/></div>)}
          <CardPessoas2 list={devs}/>
        
        </header>
      </div>
    );
  

}



export default App;

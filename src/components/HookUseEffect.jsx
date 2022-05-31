import React from 'react'
import Api from './../Api';


let aleatorio = Math.round(Math.random()*60);

const HookUseEffect = () => {
    const {data:character, loading, error} = Api(`https://rickandmortyapi.com/api/character/${aleatorio}`);

    if (loading) {
        return <h1>Loading...</h1>;
      }
    
      if (error) {
        console.log(error)
      }

      return (
        <div className="App">
    
    
    
          <br/>
          <img src={character?.image} alt="" />
         <h1>
           {character?.name}
         </h1>
    
         <h3>{character?.species}</h3>
         <h4>{character?.origin.name}</h4>
    
          
    
        </div>
      );
    }

export default HookUseEffect
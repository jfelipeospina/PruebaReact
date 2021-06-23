import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonAbility, setPokemonAbility] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const handleChangeButton = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonAbility(res.data.abilities[0].ability.name);
      setPokemonName(res.data.forms[0].name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonData);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
             type="text"         
            onChange={handleChange}
            placeholder="Ingrese Nombre del Pokemon"
          />                     
        </label>
      </form>
         
      <form onSubmit={handleSubmitButton}>
      <table align="center">
        <tr><td>
      <input
            type="submit"
            value="ditto"
            onClick={handleChangeButton}
          />
          </td><td>
           <input
            type="submit"
            value="pikachu"
            onClick={handleChangeButton}
          />
            </td><td>
             <input
            type="submit"
            value="bulbasaur"
            onClick={handleChangeButton}
          />
            </td><td>
             <input
            type="submit"
            value="charmander"
            onClick={handleChangeButton}
          />
           </td><td>
             <input
            type="submit"
            value="squirtle"
            onClick={handleChangeButton}
          />
           </td><td>
             <input
            type="submit"
            value="caterpie"
            onClick={handleChangeButton}
          />
           </td><td>
             <input
            type="submit"
            value="weedle"
            onClick={handleChangeButton}
          />
           </td><td>
             <input
            type="submit"
            value="pidgey"
            onClick={handleChangeButton}
          />
           </td>
             </tr>
</table>


      </form>
      {/* <ul>{pokemonData}</ul> */}
      {/* <p>{[pokemonData]}</p> */}
      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites["front_default"]} />
            <div className="divTable">
              <div className="divTableBody">
              <div className="divTableRow">
                  <div className="divTableCell">Nombre</div>
                  <div className="divTableCell">{pokemonName}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Tipo</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Altura</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Peso</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Numero de batallas</div>
                  <div className="divTableCell">{data.game_indices.length}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Habilidad</div>
                  <div className="divTableCell">{pokemonAbility}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
// const toArray = [];
// try {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//   const pokeDesc = `https://pokeapi.co/api/v2/ability/${pokemon}`;

//   const resPokemon = await axios.get(url);
//   const resPokemonEtc = await axios.get(pokeDesc);

//   axios.all([resPokemon, resPokemonEtc]).then(
//     axios.spread((...allData) => {
//       console.log(allData);
//     })
//   );
//   // console.log(res);
//   toArray.push(res.data);
//   setPokemonData(toArray);
// } catch (e) {
//   console.log(e);
// }

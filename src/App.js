import "./App.css";

import QuantityPokemon from "./components/QuantityPokemon";
import BuyPokemon from "./components/BuyPokemon";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5" style={{ maxWidth: "370px" }}>
            <div className="row no-gutters">
              <div className="col-4">
                <img src="pokemon.jpg" alt="pokemon" className="card-img" />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <QuantityPokemon />
                  <BuyPokemon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

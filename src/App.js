import "./App.css";

//  import QuantityPokemon from "./components/QuantityPokemon";
//  import BuyPokemon from "./components/BuyPokemon";
import BuyPokemon from "./hooks/BuyPokemon";
import QuantityPokemon from "./hooks/QuantityPokemon";
import store from "./redux/store";
import { Provider } from "react-redux";
import SearcherPokemon from "./components/searcher/SearcherPokemon";
import ResultPokemon from "./components/searcher/ResultPokemon";

function App() {
  //  console.log("[actual-state]: ", store.getState());
  return (
    <Provider store={store}>
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
          <div className="col-12 mt-4 border-top pt-3">
            <SearcherPokemon />
          </div>
          <div className="col-12">
            <ResultPokemon />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

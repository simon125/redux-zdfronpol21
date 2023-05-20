/**
 * https://play.hbomax.com/player/urn:hbo:episode:GXdbSnAxu75uAuwEAACWx/undefined
 */

import { Navigation } from "./components/Navigation";

import { Example002 } from "./002_basics/Example002";
import { Route, Routes } from "react-router-dom";
import { Example003 } from "./003_intermediate/Example003";
import { CounterWithRedux } from "./002_basics/exercise000/CounterWithRedux";
import { TodoList } from "./002_basics/exercise002/TodoList";
import { Users } from "./002_basics/exercise003/Users";
import { ComplexCounterWithRedux } from "./002_basics/exercise001/ComplexCounterWithRedux";

function App() {
  return (
    <>
      <Navigation />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <article>
                Zaimportuj komponent Counter do pliku App.js i wywołaj go tutaj
                zamiast tego article
              </article>
            }
          />
          <Route path="/redux-setup" element={<article>Setup</article>} />
          <Route
            path="/basics"
            element={
              <>
                <Example002 />
                <CounterWithRedux />
                <ComplexCounterWithRedux />
                <TodoList />
                <Users />
              </>
            }
          />
          <Route
            path="/intermediate"
            element={
              <>
                <Example003 />
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;

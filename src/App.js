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
import { Counter } from "./000_warm_up/Counter";

function App() {
  return (
    <>
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Counter />} />
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

const Component = () => {
  return (
    <>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};

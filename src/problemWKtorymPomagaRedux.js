/**
 * Przykłąd props drillingu - sytuacja nieporządana
 */

import { useState } from "react";

const GrandChild = (props) => {
  return (
    <div>
      <button onClick={props.setValue}>{props.value}</button>
    </div>
  );
};

const Child = (props) => {
  return (
    <div>
      <GrandChild value={props.value} setValue={props.setValue} />
    </div>
  );
};

const Parent = (props) => {
  return (
    <div>
      <Child value={props.value} setValue={props.setValue} />
    </div>
  );
};

const GrandParent = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Parent value={value} setValue={setValue} />
    </div>
  );
};

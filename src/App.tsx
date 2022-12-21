import React from "react";
import Element from "./components/Element";

const App = () => {
  return (
    <div className="wrapper">
      <div className='create'>
        <button>Create</button>
      </div>
        <ol className='list'>
            <Element />
        </ol>
    </div>
  );
};

export default App;

import React from "react";
import Element from "./components/Element";

type TElement = {
  id: string;
};

const App = () => {
  const [items, setItems] = React.useState<TElement[]>([]);

  const addItem = () => {
    const id = new Date().valueOf().toString();
    setItems((prevState) => [...prevState, { id }]);
  };

  const deleteItem = (id: string) => {
    if (window.confirm("Delete element?")) {
      setItems((prevState) => prevState.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="wrapper">
      <div className="create">
        <button onClick={addItem}>Create</button>
      </div>
      <ol className="list">
        {items.length > 0 ? (
          items.map((item) => (
            <Element key={item.id} id={item.id} deleteItem={deleteItem} />
          ))
        ) : (
          <div>Список пуст</div>
        )}
      </ol>
    </div>
  );
};

export default App;

import React from "react";
import Element from "./components/Element";

type TElement = {
  id: string;
  time: number;
};

const App = () => {
  const [items, setItems] = React.useState<TElement[]>([]);

  const addItem = () => {
    const id = new Date().valueOf().toString();
    const time = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    console.log(time);
    setItems((prevState) => [...prevState, { id, time }]);
  };

  const deleteItem = (id: string) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      <div className="create">
        <button onClick={addItem}>Create</button>
      </div>
      <ol className="list">
        {items.length > 0 ? (
          items.map((item) => (
            <Element
              key={item.id}
              id={item.id}
              time={item.time}
              deleteItem={deleteItem}
            />
          ))
        ) : (
          <div>Список пуст</div>
        )}
      </ol>
    </div>
  );
};

export default App;
